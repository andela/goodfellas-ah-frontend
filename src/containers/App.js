import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../styles/styles.scss';
import LandingPage from '../views/LandingPage';
import Profile from '../views/ProfilePage';
import Signin from '../views/SigninPage';
import Signup from '../views/SignupPage';
import CreateArticle from '../views/CreateArticles';
import Header from '../components/shared/Header';
import authenticate from './hoc/authenticate';
import GetAllArticles from '../views/AllArticles';

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

const Articles = () => (
  <div>
    <Header />
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
    </div>
  </BrowserRouter>
);
export default App;
