import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Hero from '../views/Hero';
import Profile from '../views/Profile';
import Signin from '../views/Signin';
import Header from '../components/shared/Header';
import authenticate from './hoc/authenticate';
import '../styles/styles.scss';

const User = () => (
  <div>
    <Header />
    <Route path="/user/profile" component={Profile} />
  </div>
);

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Hero} />
      <Route exact path="/auth/signin" component={Signin} />
      <Route path="/user" component={authenticate(User)} />
    </div>
  </BrowserRouter>
);
export default App;
