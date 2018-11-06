import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Hero from '../views/Hero';
import '../styles/styles.scss';
import store from '../store';
import EditProfile from '../views/ProfileEditPage';
import Profile from '../views/ProfilePage';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Route exact path="/" component={Hero} />
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profile/edit" component={EditProfile} />
        <Route exact path="/profile/:userId" component={Profile} />
      </Switch>
    </div>
  </Provider>
);

export default App;
