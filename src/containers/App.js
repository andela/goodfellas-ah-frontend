import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from '../store';
import ForgotPassword from '../views/ForgotPassword';
import ResetPassword from '../views/ResetPassword';
import '../styles/styles.scss';


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <header>
          <p>Welcome to Authors&apos; Haven</p>
        </header>
        <Route exact path="/forgotpassword" component={ForgotPassword} />
        <Route exact path="/resetpassword" component={ResetPassword} />
      </div>
    </BrowserRouter>
  </Provider>

);
export default App;
