import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { forgotPassword } from '../actions/authActions';

class ForgotPassword extends Component {
  onSubmit = (e) => {
    const { forgotPassword: resetPassword } = this.props;
    const { history } = this.props;
    e.preventDefault();
    const userEmail = {
      email: e.target.email.value,
    };
    resetPassword(userEmail, history);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
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
