import React from 'react';

export default (props) => (
  <textarea type={props.type || 'text'} placeholder={props.placeholder} id={props.id} className="text-box" />
);
