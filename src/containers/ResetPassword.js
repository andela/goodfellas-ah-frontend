import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { resetPassword } from '../actions/authActions';
import Submitbtn from '../components/shared/Submitbtn';
import InputField from '../components/shared/InputField';

class ResetPassword extends Component {
  handleResetPassword = (e) => {
    e.preventDefault();
    const userData = {
      password: e.target.password.value,
      confirm_password: e.target.confirmPassword.value,
    };
    this.props.resetPassword(userData, this.props.history);
  };

  render() {
    const { errorMessage } = this.props.auth;
    return (
      <form onSubmit={this.handleResetPassword}>
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
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { resetPassword },
)(withRouter(ResetPassword));
