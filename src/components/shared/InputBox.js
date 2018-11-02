import React from 'react';

export default (props) => (
  <input type={props.type || 'text'} placeholder={props.placeholder} id={props.id} className="input-box" />
);
