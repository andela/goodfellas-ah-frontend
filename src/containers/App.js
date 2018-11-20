import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/styles.scss';
import authenticate from './hoc/authenticate';
import LandingPage from '../views/LandingPage';
import Signin from '../views/SigninPage';
import Signup from '../views/SignupPage';
import EditProfile from '../views/ProfileEditPage';
import Profile from '../views/ProfilePage';
import SocialAuthPage from '../views/SocialAuthPage';
import ForgotPasswordPage from '../views/ForgotPasswordPage';
import ResetPasswordPage from '../views/ResetPasswordPage';
import CreateArticle from '../views/CreateArticles';
import SearchArticles from '../views/SearchArticles';
import Header from '../components/shared/Header';
import GetAllArticles from '../views/AllArticles';
import NotificationPage from '../views/NotificationPage';

const User = () => (
  <Switch>
    <Route exact path="/user/profile" component={Profile} />
    <Route exact path="/user/profile/edit" component={EditProfile} />
    <Route exact path="/user/profile/:userId" component={Profile} />
    <Route path="/user/notifications" component={NotificationPage} />
  </Switch>
);

const Auth = () => (
  <div>
    <Route path="/auth/signin" render={(props) => <Signin formtype="signin" {...props} />} />
    <Route path="/auth/signup" render={(props) => <Signup formtype="signup" {...props} />} />
    <Route path="/auth/social" component={SocialAuthPage} />
  </div>
);

const Articles = (props) => (
  <div>
    <Header {...props} />
    <Route path="/articles/search" component={SearchArticles} />
    <Route path="/articles/create" component={CreateArticle} />
    <Route path="/articles/home" component={GetAllArticles} />
  </div>
);

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/auth" component={Auth} />
      <Route path="/articles" component={Articles} />
      <Route path="/user" component={authenticate(User)} />
      <Route path="/forgotpassword" component={ForgotPasswordPage} />
      <Route path="/resetpassword" component={ResetPasswordPage} />
    </div>
  </BrowserRouter>
);

export default App;
