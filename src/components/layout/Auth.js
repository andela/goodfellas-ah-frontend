import React from 'react';
import facebook from '../../assets/facebook-image.png';
import google from '../../assets/google-image.png';
import twitter from '../../assets/twitter-image.png';
import AuthFormToggle from '../AuthFormToggle';
import AuthImage from '../AuthImage';
import SocialButton from '../SocialButton';
import '../../styles/styles.scss';


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
