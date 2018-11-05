import React, { Component } from 'react';
import { connect } from 'react-redux';
import { forgotPassword } from '../actions/authActions';
import Submitbtn from '../components/shared/Submitbtn';

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
      <div className="pwreset">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <p className="lead text-center">Reset password</p>
              <form onSubmit={this.handleForgotPassword}>
                <div className="form-group">
                  <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" />
                </div>
                {successMessage ? (
                  <div className="successmsg">
                    <p>{successMessage}</p>
                  </div>
                ) : (
                  <div className="errormsg"><p>{errorMessage}</p></div>
                )}
                <Submitbtn />
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
  { forgotPassword },
)(ForgotPassword);
