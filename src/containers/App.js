import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from '../views/LandingPage';
import Profile from '../views/ProfilePage';
import Signin from '../views/SigninPage';
import Header from '../components/shared/Header';
import ForgotPasswordPage from '../views/ForgotPasswordPage';
import ResetPasswordPage from '../views/ResetPasswordPage';

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
  </div>
);

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/auth" component={Auth} />
      <Route path="/user" component={authenticate(User)} />
      <Route path="/forgotpassword" component={ForgotPasswordPage} />
      <Route path="/resetpassword" component={ResetPasswordPage} />
    </div>
  </BrowserRouter>
);
export default App;
