import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Sample from '../components/Sample';
import '../styles/styles.scss';


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
