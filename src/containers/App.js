import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import '../styles/styles.scss';
import Hero from '../components/layout/hero';


const App = () => (
  <Provider store={store}>
    <div className="App">
      <Hero />
    </div>
  </Provider>
);
export default App;
