import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from '../components/HomePage';
import '../styles/styles.scss';
import store from '../store';
import Sample from '../components/Sample';

const App = () => (
  <Provider store={store}>
    <div className="App">
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
      <Route path="/Login" component={Sample} />
    </div>
  </Provider>
);

export default App;