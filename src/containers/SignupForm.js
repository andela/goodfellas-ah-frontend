import React from 'react';

const SignupForm = () => (
  <div>
    <form className="auth-form">
      <fieldset className="form-group">
        <div className="form-group">
          <label className="sr-only" htmlFor="firstname">First name</label>
          <input
            type="text"
            placeholder="Firstname"
            id="firstname"
          />
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="lastname">Last name</label>
          <input
            type="text"
            placeholder="Lastname"
            id="lastname"
          />
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Email"
            id="email"
          />
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="password">Password</label>
          <input
            type="text"
            placeholder="Password"
            id="password"
          />
        </div>
        <div className="form-group">
          <label className="sr-only" htmlFor="passwordConfirm">Password Confirm</label>
          <input
            type="text"
            placeholder="Password Confirm"
            id="passwordConfirm"
          />
        </div>
      </fieldset>
      <button className="auth-submit-button" type="submit">SIGN UP</button>
    </form>
  </div>
);

export default SignupForm;
