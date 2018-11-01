import React from 'react';
import { Link, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Login from '../components/Login';
import Profile from '../components/Profile';
import Signup from './Signup';
import '../styles/styles.scss';

export default () => (
  <div className="App">
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Signup">Signup</Link>
        </li>
        <li>
          <Link to="/user/profile">Profile</Link>
        </li>
      </ul>
    </nav>
    <Route exact path="/" component={HomePage} />
    <Route path="/Login" component={Login} />
    <Route path="/Signup" component={Signup} />
    <Route path="/user/profile" component={Profile} />
  </div>

);
