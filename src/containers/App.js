import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ForgotPasswordPage from '../views/ForgotPasswordPage';
import ResetPasswordPage from '../views/ResetPasswordPage';
import '../styles/styles.scss';

const App = () => (
  <BrowserRouter>
    <div>
      <Route path="/forgotpassword" component={ForgotPasswordPage} />
      <Route path="/resetpassword" component={ResetPasswordPage} />
    </div>
  </BrowserRouter>
);
export default App;
