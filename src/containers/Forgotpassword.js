import React, { Component } from 'react';
import { connect } from 'react-redux';
import { forgotPassword } from '../actions/authActions';
import Submitbtn from '../components/shared/Submitbtn';
import InputField from '../components/shared/InputField';


class ForgotPassword extends Component {
  handleForgotPassword = (e) => {
    const { forgotPassword: resetPassword } = this.props;
    e.preventDefault();
    const userEmail = {
      email: e.target.email.value,
    };
    resetPassword(userEmail);
  };

  render() {
    const { errorMessage } = this.props;
    return (
      <form onSubmit={this.handleForgotPassword}>
        <InputField placeholder="Email Address" type="email" name="email" />
        {errorMessage
          && <div className="errormsg"><p>{errorMessage}</p></div>
        }
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
  { forgotPassword },
)(ForgotPassword);
