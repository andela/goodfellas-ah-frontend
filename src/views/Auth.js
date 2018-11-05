import React, { Component } from 'react';
import SigninForm from '../containers/SigninForm';
import SignupForm from '../containers/SignupForm';
import facebook from '../assets/facebook-image.png';
import google from '../assets/google-image.png';
import twitter from '../assets/twitter-image.png';

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
      <div className="auth">
        <section className="auth-image">
          <div className="auth-title">Authors Haven</div>
          <div className="auth-tagline">A Community of Like Minded Authors</div>
        </section>
        <div className="auth-image-divide" />

        <section className="auth-form-wrapper">
          <div>
            <div className="auth-toggle-wrapper">
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
            </div>
            {this.renderAuthForm(active)}
            <div className="auth-form-or">Or</div>
            <div className="auth-icon-wrapper">
              <div className="auth-social-icons">
                <div className="auth-social-button">
                  <img src={facebook} alt="facebook signup" />
                </div>
                <div className="auth-social-button">
                  <img src={google} alt="google signup" />
                </div>
                <div className="auth-social-button">
                  <img src={twitter} alt="twitter signup" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Auth;
