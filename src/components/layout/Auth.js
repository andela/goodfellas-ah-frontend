import React from 'react';
import { Link } from 'react-router-dom';
import author from '../../assets/author.jpg';
import facebook from '../../assets/facebook-image.png';
import google from '../../assets/google-image.png';
import twitter from '../../assets/twitter-image.png';

const Auth = (props) => {
  const { children } = props;
  return (
    <div className="authFlex">
      <div className="authorWriting">
        <p className="authHeader">Authors Haven</p>
        <img width="84%" src={author} alt="" />
        <p className="authTitle">A community of like minded authors</p>
      </div>
      <div className="signupForm">
        <div className="signup-buttons">
          <Link className="both-links" to="/Signup">
            <input type="button" className="buttons" id="sign-up" value="SIGN UP" />
          </Link>
          <Link className="both-links" to="/Signin">
            <input type="button" className="buttons" id="sign-in" value="SIGN IN" />
          </Link>
        </div>
        {children}
        <div className="or">Or</div>
        <div className="social-icons">
          <div className="social-link">
            <div className="facebook">
              <img src={facebook} alt="" />
            </div>
          </div>
          <div className="social-link">
            <div className="google">
              <img src={google} alt="" />
            </div>
          </div>
          <div className="social-link">
            <div className="twitter">
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
