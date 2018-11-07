import React from 'react';
<<<<<<< HEAD
import SigninForm from '../containers/SigninForm';
import Auth from '../components/layout/Auth';


const Signin = (props) => (
  <div>
    <Auth><SigninForm {...props} /></Auth>
=======
import Auth from '../components/layout/Auth';
import SigninForm from '../containers/SigninForm';

const Signin = (props) => (
  <div>
    <Auth>
      <SigninForm {...props} />
    </Auth>
>>>>>>> staging
  </div>
);

export default Signin;
