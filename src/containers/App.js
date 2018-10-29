import React from 'react';
import { Provider } from 'react-redux';
import '../styles/App.css';

const App = () => (
  <Provider>
    <div className="App">
      <header>
        <p>Welcome to Authors&apos; Haven</p>
      </header>
    </div>
  </Provider>
);

export default App;
