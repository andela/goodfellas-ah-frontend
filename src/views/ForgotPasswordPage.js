
import React from 'react';
import NewPassword from '../components/layout/NewPassword';
import Forgotpassword from '../containers/ForgotPassword';

const ForgotPasswordPage = (props) => (
  <div>
    <NewPassword>
      <Forgotpassword {...props} />
    </NewPassword>
  </div>
);

export default ForgotPasswordPage;
