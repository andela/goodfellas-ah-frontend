import React, { Component } from 'react';
import { connect } from 'react-redux';
import { forgotPassword } from '../actions/authActions';
import AuthInput from '../components/shared/AuthInput';
import AuthButton from '../components/shared/AuthButton';
import validateAuth from '../lib/validation';
// import Loading from '../components/shared/Loading';

export class ForgotPassword extends Component {
  state = {
    email: '',
    validationError: {},
  };

  handleForgotPassword = (e) => {
    e.preventDefault();
    const { forgotPassword: resetPassword } = this.props;
    const { email } = this.state;
    const fieldNames = ['email'];
    const validationError = validateAuth({ email }, fieldNames);
    this.setState({ validationError });
    if (!validationError.status) {
      resetPassword({ email });
      this.setState({ email: '' });
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    const { errorMessage } = this.props;
    const { email, validationError } = this.state;
    return (
      <form onSubmit={this.handleForgotPassword} className="reset-form">

        <h3 className="reset-title text-center">Forgot Password</h3>
        <AuthInput
          name="email"
          placeholder="Input Email Address"
          type="email"
          error={validationError}
          value={email}
          handleChange={this.handleChange}
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
  { forgotPassword },
)(ForgotPassword);
