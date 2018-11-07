import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/styles.scss';
import App from './containers/App';
import Root from './root';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root'),
);
