import React from 'react';

export default (props) => {
  const { type, placeholder } = props;
  return (
    <textarea type={type || 'text'} placeholder={placeholder} className="text-box" />
  );
};
