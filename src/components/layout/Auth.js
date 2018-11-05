import React from 'react';
import author from '../../assets/author.jpg';
import facebook from '../../assets/facebook-image.png';
import google from '../../assets/google-image.png';
import twitter from '../../assets/twitter-image.png';
import AuthFormToggle from '../AuthFormToggle';

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
        <AuthFormToggle {...props} />
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
