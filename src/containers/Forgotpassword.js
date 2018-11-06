import React, { Component } from 'react';
import { connect } from 'react-redux';
import { forgotPassword } from '../actions/authActions';
import Submitbtn from '../components/shared/Submitbtn';
import InputField from '../components/shared/InputField';


class ForgotPassword extends Component {
  handleForgotPassword = (e) => {
    e.preventDefault();
    const userEmail = {
      email: e.target.email.value,
    };
    this.props.forgotPassword(userEmail);
  };

  render() {
    const { errorMessage } = this.props.auth;
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
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { forgotPassword },
)(ForgotPassword);
