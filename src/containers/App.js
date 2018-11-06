import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Hero from '../views/Hero';
import Signup from '../views/Signup';
import Signin from '../views/Signin';
import Profile from '../views/Profile';
import '../styles/styles.scss';

export default () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Hero} />
      <Route path="/auth/signin" render={(props) => <Signin formtype="signin" {...props} />} />
      <Route path="/auth/signup" render={(props) => <Signup formtype="signup" {...props} />} />
      <Route path="/user/profile" component={Profile} />
    </div>
  </BrowserRouter>
);
