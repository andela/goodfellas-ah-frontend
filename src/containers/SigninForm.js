import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signin } from '../actions/authActions';
import { validateAuth } from '../lib/validation';

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
        <div>
          <label className="sr-only" htmlFor="useremail">User email</label>
          <input
            type="text"
            className="signupField"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(event) => this.handleChange(event, 'email')}
          />
          <div className="errorField">{validationError.email}</div>
        </div>
        <div>
          <label className="sr-only" htmlFor="userpassword">User password</label>
          <input
            type="password"
            className="signupField"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(event) => this.handleChange(event, 'password')}
          />
          <div className="errorField">{validationError.password}</div>
        </div>
        <div>
          <div className="change-password">Forgot Password?</div>
        </div>
        <div className="errorField">{errorMessage}</div>
        <div>
          <button className="signupButton" type="submit">SIGN IN</button>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default connect(mapStateToProps, { signin })(Signin);
