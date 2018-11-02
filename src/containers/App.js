import React from 'react';
import { Route } from 'react-router-dom';
import Hero from '../views/Hero';
import SigninForm from '../containers/SigninForm';
import Profile from '../views/Profile';
import Auth from '../views/Auth'
import SignupForm from '../containers/SignupForm';
import '../styles/styles.scss';

export default () => (
  <div>
    <Route exact path="/" component={Hero} />
    <Route path="/Signup" render={(props) => (<Auth {...props } page={<SignupForm/>}/>)} />
    <Route path="/Signin" render={(props) => (<Auth {...props } page={<SigninForm/>}/>)} />
    <Route path="/user/profile" component={Profile} />
  </div>

);
