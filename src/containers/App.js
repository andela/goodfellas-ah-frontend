import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Hero from '../views/Hero';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import Profile from '../views/Profile';
import Auth from '../views/Auth';
import '../styles/styles.scss';

export default () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Hero} />
      <Route path="/Signup" render={(props) => (<Auth {...props} page={<SignupForm />} />)} />
      <Route path="/Signin" render={(props) => (<Auth {...props} page={<SigninForm />} />)} />
      <Route path="/user/profile" component={Profile} />
    </div>
  </BrowserRouter>
);
