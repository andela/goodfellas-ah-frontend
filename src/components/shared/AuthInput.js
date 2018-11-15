import React from 'react';

const AuthInput = (props) => {
  const {
    value, error, name, id, type, placeholder, handleChange, handleBlur, touched,
  } = props;
  return (
    <div className="auth-input-wrapper">
      <label className="sr-only" htmlFor={name}>{name}</label>
      <input
        type={type || 'text'}
        className={`auth-field ${(touched[name] && error[name]) ? 'has-error' : ''}`}
        placeholder={placeholder}
        id={id || name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <div className="error-field">{touched[name] ? error[name] : ''}</div>
    </div>);
};

export default AuthInput;
