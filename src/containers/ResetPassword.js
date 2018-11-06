import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { resetPassword } from '../actions/authActions';
import Submitbtn from '../components/shared/Submitbtn';
import InputField from '../components/shared/InputField';

class ResetPassword extends Component {
  handleResetPassword = (e) => {
    const { resetPassword: newPassword, history } = this.props;
    e.preventDefault();
    const userData = {
      password: e.target.password.value,
      confirm_password: e.target.confirmPassword.value,
    };
    newPassword(userData, history);
  };

  render() {
    const { errorMessage } = this.props;
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
  errorMesswge: state.auth.errorMesswge,
});

export default connect(
  mapStateToProps,
  { resetPassword },
)(withRouter(ResetPassword));
