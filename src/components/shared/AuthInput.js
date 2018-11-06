import React from 'react';

const AuthInput = (props) => {
  const {
    value, error, name, type, placeholder,
  } = props;
  return (
    <div>
      <label className="sr-only" htmlFor={name}>{name}</label>
      <input
        type={type || 'text'}
        className="signupField"
        placeholder={placeholder}
        id={name}
        value={value}
        onChange={(event) => props.handleChange(event, name)}
      />
      <div className="errorField">{error[name]}</div>
    </div>);
};

export default AuthInput;
