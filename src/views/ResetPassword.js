import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { resetPassword } from '../actions/authActions';

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
    const { successMessage, errorMessage } = this.props.auth;
    return (
      <div className="pwreset">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <p className="lead text-center">Create a new password</p>
              <form onSubmit={this.handleResetPassword}>
                <div className="form-group">
                  <input type="password" className="form-control form-control-lg" placeholder="New password" name="password" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control form-control-lg" placeholder="Confirm new password" name="confirmPassword" />
                </div>
                {successMessage ? (
                  <div className="successmsg">
                    <p>{successMessage}</p>
                    <Link to="/signin">Login</Link>
                  </div>
                ) : (
                  <div className="errormsg"><p>{errorMessage}</p></div>
                )}
                <input type="submit" className="btn resetbtn btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
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
