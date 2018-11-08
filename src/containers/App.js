import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/styles.scss';
import authenticate from './hoc/authenticate';
import LandingPage from '../views/LandingPage';
import Signin from '../views/SigninPage';
import Signup from '../views/SignupPage';
import EditProfile from '../views/ProfileEditPage';
import Profile from '../views/ProfilePage';

const User = () => (
  <Switch>
    <Route exact path="/user/profile" component={Profile} />
    <Route exact path="/user/profile/:userId" component={Profile} />
    <Route exact path="/user/profile/edit" component={EditProfile} />
  </Switch>
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
      <Route exact path="/" component={LandingPage} />
      <Route path="/auth" component={Auth} />
      <Route path="/user" component={authenticate(User)} />
    </div>
  </BrowserRouter>
);

export default App;
