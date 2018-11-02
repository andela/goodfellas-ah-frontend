import React, { Component } from 'react';
import SigninForm from '../containers/SigninForm';
import SignupForm from '../containers/SignupForm';

class Auth extends Component {
  state={
    active: 'signin',
  }

  changeForm(formType) {
    this.setState({ active: formType });
  }

  renderAuthForm(active) {
    return (active === 'signin' ? <SigninForm {...this.props} /> : <SignupForm {...this.props} />);
  }

  render() {
    const { active } = this.state;
    const activeSignin = (active === 'signin' ? 'auth-button-active' : null);
    const activeSignup = (active === 'signup' ? 'auth-button-active' : null);

    return (
      <div className="container-fluid row auth">
        <section className="col auth-image">
          <div className="auth-title">Authors Haven</div>
          <div className="auth-tagline">A Community of Like Minded Authors</div>
        </section>
        <div className="auth-image-divide" />

        <section className="col auth-form-wrapper">
          <button
            type="button"
            className={`auth-button-toggle ${activeSignup}`}
            onClick={() => this.changeForm('signup')}
          >
            SIGN UP
          </button>
          <button
            type="button"
            className={`auth-button-toggle ${activeSignin}`}
            onClick={() => this.changeForm('signin')}
          >
            SIGN IN
          </button>
          {this.renderAuthForm(active)}
        </section>
      </div>
    );
  }
}
export default Auth;
