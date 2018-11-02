import React, { Component } from 'react';
import { connect } from 'react-redux';
import { forgotPassword } from '../actions/authActions';

class ForgotPassword extends Component {
  handleForgotPassword = (e) => {
    e.preventDefault();
    const userEmail = {
      email: e.target.email.value,
    };
    this.props.forgotPassword(userEmail);
  };

  render() {
    const { successMessage, errorMessage } = this.props.auth;
    return (
      <form onSubmit={this.handleForgotPassword}>
        <input type="text" name="email" placeholder="input email address" />
        <input type="submit" value="submit" />
        {successMessage ? <div>{successMessage}</div> : <div>{errorMessage}</div>}
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { forgotPassword },
)(ForgotPassword);
