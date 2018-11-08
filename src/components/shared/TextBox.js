import React from 'react';

export default (props) => {
  const {
    type, placeholder, handleChange, value, name,
  } = props;
  return (
    <textarea name={name} value={value || ''} type={type || 'text'} placeholder={placeholder} className="text-box" onChange={handleChange} />
  );
};
