import React from 'react';

export default (props) => (
  <button
    style={{
      color: props.color,
      border: `1px solid ${props.color}`,
    }}
    type={props.type}
    placeholder={props.placeholder}
    id={props.id}
    className="button outline"
  >{props.children}
  </button>
);
