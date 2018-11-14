import React from 'react';

export default (props) => {
  const {
    type, placeholder, handleChange, value, name,
  } = props;
  return (
    <input name={name} value={value || ''} type={type || 'text'} placeholder={placeholder} className="input-box" onChange={handleChange} />
  );
};
