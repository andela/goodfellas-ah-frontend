import React from 'react';
import facebook from '../../assets/facebook-image.png';
import google from '../../assets/google-image.png';
import twitter from '../../assets/twitter-image.png';
import AuthFormToggle from '../Auth/AuthFormToggle';
import AuthImage from '../Auth/AuthImage';
import SocialButton from '../Auth/SocialButton';

const Auth = (props) => {
  const { children } = props;
  return (
    <div className="auth-flex">
      <AuthImage />
      <div className="auth-form">
        <AuthFormToggle {...props} />
        {children}
        <div className="or">Or</div>
        <div className="social-icons">
          <SocialButton image={facebook} className="facebook" />
          <SocialButton image={google} className="google" />
          <SocialButton image={twitter} className="twitter" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
