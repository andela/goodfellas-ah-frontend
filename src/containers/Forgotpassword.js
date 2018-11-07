import React, { Component } from 'react';
import { connect } from 'react-redux';
import { forgotPassword } from '../actions/authActions';
import Submitbtn from '../components/shared/Submitbtn';
import InputField from '../components/shared/InputField';
import Loading from '../components/shared/Loading';


class ForgotPassword extends Component {
  state= {
    loading: false,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({
        loading: false,
      });
    }
  }


  handleForgotPassword = (e) => {
    const { forgotPassword: resetPassword } = this.props;
    this.setState({
      loading: true,
    });
    e.preventDefault();
    const userEmail = {
      email: e.target.email.value,
    };
    resetPassword(userEmail);
  };


  render() {
    const { loading } = this.state;
    const { errorMessage } = this.props;
    return (
      <form onSubmit={this.handleForgotPassword}>
        {loading && <Loading />}
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
  errorMessage: state.auth.errorMessage,
  successMessage: state.auth.successMessage,
});

export default connect(
  mapStateToProps,
  { forgotPassword },
)(ForgotPassword);
