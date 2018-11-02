import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import store from '../store';
import Sample from '../components/Sample';
import '../styles/styles.scss';
import Hero from '../components/layout/hero';
import CreateArticles from '../components/layout/CreateArticles';


const App = () => (
  <Provider store={store}>
    <div className="App">
      <Route exact path="/" component={Hero} />
      <Route path="/Login" component={Sample} />
      <Route path="/Articles" component={CreateArticles} />
    </div>
  </Provider>
);

export default App;
