import React from 'react';

const AuthButton = ({ name }) => (
  <div>
    <button className="auth-button" type="submit">{name}</button>
  </div>
);

export default AuthButton;
