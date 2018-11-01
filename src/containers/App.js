import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from '../store';
import '../styles/styles.scss';
import Hero from '../views/Hero';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Hero} />
      </div>
    </BrowserRouter>
  </Provider>
);
export default App;
