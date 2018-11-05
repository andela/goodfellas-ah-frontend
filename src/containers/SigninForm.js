import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
  };

  render() {
    const { email, password, validationError } = this.state;
    const { errorMessage } = this.props;
    return (
      <div>
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <fieldset className="form-group">
            <div className="form-group">
              <label className="sr-only" htmlFor="useremail">
                User email
              </label>
              <input type="text" placeholder="Email" id="useremail" value={email} onChange={(event) => this.setState({ email: event.target.value })} />
              <div className="error">{validationError.email}</div>
            </div>
            <div className="form-group">
              <label className="sr-only" htmlFor="userpassword">
                User password
              </label>
              <input type="password" placeholder="Password" id="userpassword" value={password} onChange={(event) => this.setState({ password: event.target.value })} />
              <div className="error">{validationError.password}</div>
            </div>
          </fieldset>
          <div className="auth-change-password">
            <Link to="/forgotpassword">Forgot Password?</Link>
          </div>
          <div className="error">{errorMessage}</div>
          <button className="auth-submit-button" type="submit">
            SIGN IN
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default connect(
  mapStateToProps,
  { signin },
)(Signin);
