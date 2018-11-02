import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { forgotPassword } from '../actions/authActions';

class ForgotPassword extends Component {
  handleForgotPassword = (e) => {
    e.preventDefault();
    const userEmail = {
      email: e.target.email.value,
    };
    this.props.forgotPassword(userEmail, this.props.history);
  };

  render() {
    return (
      <form onSubmit={this.handleForgotPassword}>
        <input type="text" name="email" placeholder="input email address" />
        <input type="submit" value="submit" />
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
)(withRouter(ForgotPassword));
