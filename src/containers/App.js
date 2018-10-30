import React from 'react';
import { Provider } from 'react-redux';
import '../styles/App.css';
import store from '../store';
import Sample from '../components/Sample';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <header>
        <p>Welcome to Authors&apos; Haven</p>
      </header>
      <Sample />
    </div>
  </Provider>
);
export default App;
