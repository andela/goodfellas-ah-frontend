import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from '../views/LandingPage';
import Profile from '../views/ProfilePage';
import Signin from '../views/SigninPage';
import Signup from '../views/SignupPage';
import SocialAuthPage from '../views/SocialAuthPage';
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
    <Route path="/auth/social" component={SocialAuthPage} />
  </div>
);

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/auth" component={Auth} />
      <Route path="/user" component={authenticate(User)} />
    </div>
  </BrowserRouter>
);
export default App;
