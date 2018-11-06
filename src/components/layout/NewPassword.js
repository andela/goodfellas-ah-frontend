import React from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

const NewPassword = (props) => {
  const { children } = props;
  return (
    <div className="pwreset">
      <Header />
      <div className="page">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <p className="lead text-center">Reset password</p>
              {children}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default NewPassword;
