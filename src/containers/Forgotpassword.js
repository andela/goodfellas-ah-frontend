import React, { Component } from 'react';
import { connect } from 'react-redux';
import { forgotPassword } from '../actions/authActions';
import AuthInput from '../components/shared/AuthInput';
import AuthButton from '../components/shared/AuthButton';
import Loading from '../components/shared/Loading';


class ForgotPassword extends Component {
  state= {
    loading: false,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({
        loading: false,
      });
    }
  }


  handleForgotPassword = (e) => {
    const { forgotPassword: resetPassword } = this.props;
    this.setState({
      loading: true,
    });
    e.preventDefault();
    const userEmail = {
      email: e.target.email.value,
    };
    resetPassword(userEmail);
  };


  render() {
    const { loading } = this.state;
    const { errorMessage } = this.props;
    return (
      <form onSubmit={this.handleForgotPassword}>
        {loading && <Loading />}
        <AuthInput
          name="email"
          placeholder="Input Email Address"
          type="email"
          error={{ email: errorMessage }}
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
  { forgotPassword },
)(ForgotPassword);
