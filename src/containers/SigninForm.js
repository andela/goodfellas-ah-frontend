import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import facebook from '../assets/facebook-image.png';
import google from '../assets/google-image.png';
import twitter from '../assets/twitter-image.png';
import '../styles/styles.scss';


class SigninForm extends Component {
  render() {
    return (
      <div className="signupForm">
        <form>
          <div className="signup-buttons">
            <Link className="both-links" to="/Signup">
              <input type="button" className="buttons" id="sign-in" value="SIGN UP" />
            </Link>
            <Link className="both-links" to="/Signin">
              <input type="button" className="buttons" id="sign-up" value="SIGN IN" />
            </Link>
          </div>

          <div>
            <input
              type="email"
              className="signupField"
              name="email"
              id="email"
              placeholder="E-mail"
            />
            <p className="errorField" />
          </div>

          <div>
            <input
              type="password"
              className="signupField"
              name="password"
              id="password"
              placeholder="Password"
            />
            <p className="errorField" />
          </div>

          <div>
            <button className="signupButton" type="submit">SIGN IN</button>
          </div>

          <div className="or">Or</div>

          <div className="social-icons">
            <Link className="social-link" to="#">
              <div className="facebook">
                <img src={facebook} alt="" />
              </div>
            </Link>

            <Link className="social-link" to="#">
              <div className="google"><img src={google} alt="" /></div>
            </Link>

            <Link className="social-link" to="#"> <div className="twitter">
              <img src={twitter} alt="" />
            </div>
            </Link>
          </div>

        </form>
      </div>);
  }
}


export default SigninForm;
