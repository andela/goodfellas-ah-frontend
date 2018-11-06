import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signin } from '../actions/authActions';
import { validateAuth } from '../lib/validation';
import AuthInput from '../components/shared/AuthInput';
import AuthButton from '../components/shared/AuthButton';

class Signin extends Component {
  state = {
    email: '',
    password: '',
    validationError: {},
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { signin: signinUser, history } = this.props;
    const { email, password } = this.state;

    const fieldNames = ['email', 'password'];
    const validationError = validateAuth({ email, password }, fieldNames);
    this.setState({ validationError });

    if (!validationError.status) {
      signinUser({ email, password }, () => history.push('/user/profile'));
      this.setState({ email: '', password: '' });
    }
  }

  handleChange = (event, field) => {
    this.setState({ [field]: event.target.value });
  }

  render() {
    const { email, password, validationError } = this.state;
    const { errorMessage } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <AuthInput
          error={validationError}
          value={email}
          handleChange={this.handleChange}
          name="email"
          placeholder="Email"
        />
        <AuthInput
          error={validationError}
          value={password}
          handleChange={this.handleChange}
          name="password"
          type="password"
          placeholder="Password"
        />
        <div>
          <div className="change-password">Forgot Password?</div>
        </div>
        <div className="errorField">{errorMessage}</div>
        <AuthButton />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default connect(mapStateToProps, { signin })(Signin);
