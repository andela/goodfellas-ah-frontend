import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { resetPassword } from '../actions/authActions';
import AuthInput from '../components/shared/AuthInput';
import Button from '../components/shared/Button';
import validateAuth from '../lib/validation';
import Loading from '../components/shared/Loading';

const fieldNames = ['password', 'confirmPassword'];

const initialState = {
  password: '',
  confirmPassword: '',
  loading: false,
  touched: {
    password: false,
    confirmPassword: false,
  },
};

export class ResetPassword extends Component {
  state = initialState;

  handleResetPassword = async (e) => {
    e.preventDefault();
    const { resetPassword: newPassword, history } = this.props;
    const { password, confirmPassword } = this.state;
    const userData = {
      password,
      confirm_password: confirmPassword,
    };
    const validationError = validateAuth({ password, confirmPassword }, fieldNames);
    const changedTouchState = this.changeTouchState(fieldNames, true);
    this.setState({ touched: changedTouchState });

    if (!validationError.status) {
      this.setState({ loading: true });
      await newPassword(userData, history);
      this.setState(initialState);
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

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
    const {
      password, confirmPassword, loading, touched,
    } = this.state;
    const validationError = validateAuth({ password, confirmPassword }, fieldNames);
    return (
      <form onSubmit={this.handleResetPassword} className="reset-form">
        <h3 className="reset-title text-center">Reset Password</h3>

        <AuthInput
          name="password"
          placeholder="New password"
          type="password"
          value={password}
          touched={touched}
          handleChange={this.handleChange}
          handleBlur={this.handleBlur('password')}
          error={validationError}
        />
        <AuthInput
          name="confirmPassword"
          placeholder="Confirm new password"
          type="password"
          value={confirmPassword}
          touched={touched}
          handleChange={this.handleChange}
          handleBlur={this.handleBlur('confirmPassword')}
          error={validationError}
        />
        <div className="error-field">{errorMessage}</div>
        {loading ? <button disabled="disabled" type="submit" className="auth-button loading"><Loading /></button> : <Button title="SUBMIT" className="auth-button" type="submit" />}

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
