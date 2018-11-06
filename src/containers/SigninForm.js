import React from 'react';
import AuthInput from '../components/shared/AuthInput';
import '../styles/styles.scss';

const SigninForm = () => (
  <form>
    <AuthInput
      error=""
      value=""
      handleChange=""
      name="email"
      type="email"
      placeholder="E-mail"
    />

    <AuthInput
      error=""
      value=""
      handleChange=""
      name="password"
      type="password"
      placeholder="Password"
    />

    <div>
      <button className="auth-button" type="submit">SIGN IN</button>
    </div>

  </form>
);


export default SigninForm;
