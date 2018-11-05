import React from 'react';

const SignupForm = () => (
  <form>
    <div>
      <input
        type="text"
        className="signupField"
        id="firstName"
        placeholder="Firstname"
      />
    </div>

    <div>
      <input
        type="text"
        className="signupField"
        id="lastName"
        placeholder="Lastname"
      />
    </div>

    <div>
      <input
        type="email"
        className="signupField"
        id="email"
        placeholder="E-mail"
      />
    </div>

    <div>
      <input
        type="password"
        className="signupField"
        id="password"
        placeholder="Password"
      />
    </div>

    <div>
      <input
        type="password"
        className="signupField"
        id="confirmPassword"
        placeholder="Confirm Password"
      />
    </div>
    <div>
      <button className="signupButton" type="submit">SIGN UP</button>
    </div>
  </form>
);

export default SignupForm;
