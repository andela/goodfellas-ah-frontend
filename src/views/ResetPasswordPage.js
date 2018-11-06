
import React from 'react';
import NewPassword from '../components/layout/NewPassword';
import Resetpassword from '../containers/ResetPassword';

const ResetPasswordPage = (props) => (
  <div>
    <NewPassword>
      <Resetpassword {...props} />
    </NewPassword>
  </div>
);

export default ResetPasswordPage;
