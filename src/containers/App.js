import React from 'react';
import { Provider } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import store from '../store';
import HomePage from '../components/HomePage';
import Login from '../components/Login';
import '../styles/styles.scss';
import Hero from '../components/layout/hero';


const App = () => (
  <Provider store={store}>
    <div className="App">
      <Hero />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={HomePage} />
      <Route path="/Login" component={Login} />
    </div>
  </Provider>
);
export default App;

