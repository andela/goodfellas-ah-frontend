import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Hero from '../views/Hero';
import '../styles/styles.scss';
import store from '../store';
import EditProfile from '../views/EditProfile';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Route exact path="/" component={Hero} />
      <Route path="/profile/edit" component={EditProfile} />
    </div>
  </Provider>
);

export default App;
