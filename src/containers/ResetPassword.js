import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { resetPassword } from '../actions/authActions';
import AuthInput from '../components/shared/AuthInput';
import AuthButton from '../components/shared/AuthButton';
import Loading from '../components/shared/Loading';

class ResetPassword extends Component {
  state= {
    loading: false,
    password: '',
    confirmPassword: '',
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({
        loading: false,
      });
    }
  }

  handleResetPassword = (e) => {
    e.preventDefault();
    const { resetPassword: newPassword, history } = this.props;
    this.setState({
      loading: true,
    });
    const { password, confirmPassword } = this.state;
    const userData = {
      password,
      confirm_password: confirmPassword,
    };
    newPassword(userData, history);
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { errorMessage } = this.props;
    const { loading } = this.state;
    return (
      <form onSubmit={this.handleResetPassword}>
        { loading && <Loading />}
        <AuthInput
          name="password"
          placeholder="New password"
          type="password"
          handleChange={this.handleChange}
          error={{ password: '' }}
        />
        <AuthInput
          name="confirmPassword"
          placeholder="Confirm new password"
          type="password"
          handleChange={this.handleChange}
          error={{ confirmPassword: errorMessage }}
        />
        <AuthButton name="Submit" />

      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  errorMessage: state.auth.errorMessage,
  successMessage: state.auth.successMessage,
});


export default connect(
  mapStateToProps,
  { resetPassword },
)(withRouter(ResetPassword));
