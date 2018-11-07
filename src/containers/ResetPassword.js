import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { resetPassword } from '../actions/authActions';
import Submitbtn from '../components/shared/Submitbtn';
import InputField from '../components/shared/InputField';
import Loading from '../components/shared/Loading';

class ResetPassword extends Component {
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

  handleResetPassword = (e) => {
    const { resetPassword: newPassword, history } = this.props;
    this.setState({
      loading: true,
    });
    e.preventDefault();
    const userData = {
      password: e.target.password.value,
      confirm_password: e.target.confirmPassword.value,
    };
    newPassword(userData, history);
  };

  render() {
    const { errorMessage } = this.props;
    const { loading } = this.state;
    return (
      <form onSubmit={this.handleResetPassword}>
        { loading && <Loading />}
        <InputField placeholder="New password" type="password" name="password" />
        <InputField placeholder="Confirm new password" type="password" name="confirmPassword" />
        {errorMessage && (
          <div className="errormsg">
            <p>{errorMessage}</p>
          </div>
        )}
        <Submitbtn />

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
