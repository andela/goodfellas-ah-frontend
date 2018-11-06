import React from 'react';
import SigninForm from '../containers/SigninForm';
import Auth from '../components/layout/Auth';


const Signin = (props) => (
  <div>
    <Auth><SigninForm {...props} /></Auth>
  </div>
);

export default Signin;
