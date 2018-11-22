import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/styles.scss';
import authenticate from './hoc/authenticate';
import LandingPage from '../views/LandingPage';
import Signin from '../views/SigninPage';
import Signup from '../views/SignupPage';
import SingleArticle from '../views/SingleArticlePage';
import EditProfile from '../views/ProfileEditPage';
import Profile from '../views/ProfilePage';
import SocialAuthPage from '../views/SocialAuthPage';
import ForgotPasswordPage from '../views/ForgotPasswordPage';
import ResetPasswordPage from '../views/ResetPasswordPage';
import CreateArticle from '../views/CreateArticles';
import SearchArticles from '../views/SearchArticles';
import GetAllArticles from '../views/AllArticles';
import UpdateArticle from '../views/UpdateArticle';

const User = () => (
  <Switch>
    <Route exact path="/user/profile" component={authenticate(Profile)} />
    <Route exact path="/user/profile/edit" component={authenticate(EditProfile)} />
    <Route exact path="/user/profile/:userId" component={Profile} />
  </Switch>
);

const Auth = () => (
  <div>
    <Route path="/auth/signin" render={(props) => <Signin formtype="signin" {...props} />} />
    <Route path="/auth/signup" render={(props) => <Signup formtype="signup" {...props} />} />
    <Route path="/auth/social" component={SocialAuthPage} />
  </div>
);

const Articles = () => (
  <div>
    <Switch>
      <Route path="/articles/search" component={SearchArticles} />
      <Route path="/articles/create" component={authenticate(CreateArticle)} />
      <Route path="/articles/home" component={GetAllArticles} />
      <Route path="/articles/edit/:slug" component={UpdateArticle} />
      <Route path="/articles/:slug" component={SingleArticle} />
    </Switch>
  </div>
);

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/auth" component={Auth} />
      <Route path="/articles" component={Articles} />
      <Route path="/user" component={User} />
      <Route path="/forgotpassword" component={ForgotPasswordPage} />
      <Route path="/resetpassword" component={ResetPasswordPage} />
    </div>
  </BrowserRouter>
);

export default App;
