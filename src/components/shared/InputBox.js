import React from 'react';
import '../../styles/components/inputBox.scss';

export default (props) => (
  <input type={props.type || 'text'} placeholder={props.placeholder} id={props.id} className="input-box" />
);
