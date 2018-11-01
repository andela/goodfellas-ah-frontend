import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Signin from './Signin';
import Hero from './Hero';
import Profile from './Profile';
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
    <Route path="/auth/signin" component={Signin} />
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
