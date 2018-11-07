import React from 'react';
<<<<<<< HEAD
import SignupForm from '../containers/SignupForm';
import Auth from '../components/layout/Auth';


const Signup = (props) => (
  <div>
    <Auth><SignupForm {...props} /></Auth>
=======
import Auth from '../components/layout/Auth';
import SignupForm from '../containers/SignupForm';

const Signup = (props) => (
  <div>
    <Auth>
      <SignupForm {...props} />
    </Auth>
>>>>>>> staging
  </div>
);

export default Signup;
