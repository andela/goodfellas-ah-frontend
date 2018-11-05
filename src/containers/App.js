import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Hero from '../views/Hero';
import Profile from '../views/Profile';
import Signin from '../views/Signin';
import Signup from '../views/Signup';
import Header from '../components/shared/Header';
import authenticate from './hoc/authenticate';
import '../styles/styles.scss';

const User = () => (
  <div>
    <Header />
    <Route path="/user/profile" component={Profile} />
  </div>
);

const Auth = () => (
  <div>
    <Route path="/auth/signin" render={(props) => <Signin formtype="signin" {...props} />} />
    <Route path="/auth/signup" render={(props) => <Signup formtype="signup" {...props} />} />
  </div>
);

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Hero} />
      <Route path="/auth" component={Auth} />
      <Route path="/user" component={authenticate(User)} />
    </div>
  </BrowserRouter>
);
export default App;
