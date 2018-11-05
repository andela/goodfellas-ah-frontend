import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Hero from '../views/Hero';
import '../styles/styles.scss';
import store from '../store';
import EditProfile from '../views/EditProfile';
import Profile from '../views/Profile';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Route exact path="/" component={Hero} />
      <Route exact path="/profile/edit" component={EditProfile} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/profile/:userId" component={Profile} />
    </div>
  </Provider>
);

export default App;
