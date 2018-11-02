import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { resetPassword } from '../actions/authActions';

class ResetPassword extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      password: e.target.password.value,
      confirm_password: e.target.confirmPassword.value,
    };
    this.props.resetPassword(userData, this.props.history);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" name="password" placeholder="input new password" />
        <input type="text" name="confirmPassword" placeholder="confirm new password" />
        <input type="submit" value="submit" />
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { resetPassword })(withRouter(ResetPassword));
