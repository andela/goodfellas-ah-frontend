import React from 'react';

const SignupForm = () => (
  <form>
    <div>
      <input
        type="text"
        className="auth-field"
        id="firstName"
        placeholder="Firstname"
      />
    </div>

    <div>
      <input
        type="text"
        className="auth-field"
        id="lastName"
        placeholder="Lastname"
      />
    </div>

    <div>
      <input
        type="email"
        className="auth-field"
        id="email"
        placeholder="E-mail"
      />
    </div>

    <div>
      <input
        type="password"
        className="auth-field"
        id="password"
        placeholder="Password"
      />
    </div>

    <div>
      <input
        type="password"
        className="auth-field"
        id="confirmPassword"
        placeholder="Confirm Password"
      />
    </div>
    <div>
      <button className="auth-button" type="submit">SIGN UP</button>
    </div>
  </form>
);

export default SignupForm;
