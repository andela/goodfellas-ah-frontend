import React from 'react';


const NewPassword = (props) => {
  const { children } = props;
  return (
    <div className="pwreset">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <p className="lead text-center">Reset password</p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewPassword;
