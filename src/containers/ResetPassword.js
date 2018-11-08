import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { resetPassword } from '../actions/authActions';
import AuthInput from '../components/shared/AuthInput';
import AuthButton from '../components/shared/AuthButton';
import validateAuth from '../lib/validation';
// import Loading from '../components/shared/Loading';

export class ResetPassword extends Component {
  state= {
    password: '',
    confirmPassword: '',
    validationError: {},
  }

  handleResetPassword = (e) => {
    e.preventDefault();
    const { resetPassword: newPassword, history } = this.props;
    const { password, confirmPassword } = this.state;
    const userData = {
      password,
      confirm_password: confirmPassword,
    };
    const fieldNames = ['password', 'confirmPassword'];
    const validationError = validateAuth({ password, confirmPassword }, fieldNames);
    this.setState({ validationError });
    if (!validationError.status) {
      newPassword(userData, history);
      this.setState({ password: '', confirmPassword: '' });
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { errorMessage } = this.props;
    const { validationError, password, confirmPassword } = this.state;
    return (
      <form onSubmit={this.handleResetPassword} className="reset-form">
        <h3 className="reset-title text-center">Reset Password</h3>

        <AuthInput
          name="password"
          placeholder="New password"
          type="password"
          value={password}
          handleChange={this.handleChange}
          error={validationError}
        />
        <AuthInput
          name="confirmPassword"
          placeholder="Confirm new password"
          type="password"
          value={confirmPassword}
          handleChange={this.handleChange}
          error={validationError}
        />
        <div className="error-field">{errorMessage}</div>
        <AuthButton name="SUBMIT" />

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
