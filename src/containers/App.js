import React from 'react';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from '../store';
import ForgotPassword from '../views/ForgotPassword';
import ResetPassword from '../views/ResetPassword';
=======
import { BrowserRouter, Route } from 'react-router-dom';
import Auth from '../views/Auth';
import Hero from '../views/Hero';
import Profile from '../views/Profile';
import Header from '../components/shared/Header';
import authenticate from './hoc/authenticate';
>>>>>>> 0a956bf1c0b1b4693e671da154069b87112abf9e
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
      <Route path="/auth" component={Auth} />
      <Route path="/user" component={authenticate(User)} />
    </div>
  </BrowserRouter>
);
export default App;
