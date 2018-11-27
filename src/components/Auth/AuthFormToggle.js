import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
class AuthFormToggle extends Component {
  render() {
    const { children: { props: { formtype } } } = this.props;
    const activeSignin = (formtype === 'signin' ? 'active' : null);
    const activeSignup = (formtype === 'signup' ? 'active' : null);
    return (
      <div className="auth-buttons">
        <Link className="both-links" to="/auth/signup">
          <button type="button" className={`buttons sign-up ${activeSignup}`}>SIGN UP</button>
        </Link>
        <Link className="both-links" to="/auth/signin">
          <button type="button" className={`buttons sign-in ${activeSignin}`}>SIGN IN</button>
        </Link>
      </div>
    );
  }
}

export default AuthFormToggle;
