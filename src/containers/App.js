import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from '../store';
import Signin from './Signin';
import Hero from './Hero';
import '../styles/styles.scss';


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Hero} />
        <Route path="/signin" component={Signin} />
      </div>
    </BrowserRouter>
  </Provider>
);
export default App;
