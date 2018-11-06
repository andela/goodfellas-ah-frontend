
import React from 'react';
import NewPassword from '../components/layout/NewPassword';
import Forgotpassword from '../containers/Forgotpassword';

const ForgotPasswordPage = (props) => (
  <div>
    <NewPassword>
      <Forgotpassword {...props} />
    </NewPassword>
  </div>
);

export default ForgotPasswordPage;
