import React from 'react';

export default (props) => {
  const { type, placeholder } = props;
  return (
    <input type={type || 'text'} placeholder={placeholder} className="input-box" />
  );
};
