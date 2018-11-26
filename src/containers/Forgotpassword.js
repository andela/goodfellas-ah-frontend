import React, { Component } from 'react';
import { connect } from 'react-redux';
import { forgotPassword } from '../actions/authActions';
import AuthInput from '../components/shared/AuthInput';
import Button from '../components/shared/Button';
import validateAuth from '../lib/validation';
import Loading from '../components/shared/Loading';

const fieldNames = ['email'];

export class ForgotPassword extends Component {
  state = {
    email: '',
    loading: false,
    touched: { email: false },
  };

  handleForgotPassword = async (e) => {
    e.preventDefault();
    const { forgotPassword: resetPassword } = this.props;
    const { email } = this.state;
    const validationError = validateAuth({ email }, fieldNames);
    const changedTouchState = this.changeTouchState(fieldNames, true);
    this.setState({ touched: changedTouchState });

    if (!validationError.status) {
      this.setState({ loading: true });
      await resetPassword({ email });
      this.setState({
        email: '',
        loading: false,
        touched: { email: false },
      });
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleBlur = (field) => () => {
    const { touched } = this.state;
    this.setState({
      touched: { ...touched, [field]: true },
    });
  }

  changeTouchState = (fields, state) => {
    const touchState = {};
    fields.forEach((field) => {
      touchState[field] = state;
    });
    return touchState;
  }

  render() {
    const { errorMessage } = this.props;
    const { email, loading, touched } = this.state;
    const validationError = validateAuth({ email }, fieldNames);
    return (
      <form onSubmit={this.handleForgotPassword} className="reset-form">
        <div>
          <h3 className="reset-title text-center">Forgot Password</h3>
          <AuthInput
            error={validationError}
            value={email}
            touched={touched}
            handleChange={this.handleChange}
            handleBlur={this.handleBlur('email')}
            name="email"
            placeholder="Input Email Address"
          />
          <div className="error-field">{errorMessage}</div>
          {loading ? <button disabled="disabled" type="submit" className="auth-button loading"><Loading /></button> : <Button title="SUBMIT" className="auth-button" type="submit" />}
        </div>
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
