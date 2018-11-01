import React from 'react';
import '../../styles/components/textBox.scss';

export default (props) => (
  <textarea type={props.type || 'text'} placeholder={props.placeholder} id={props.id} className="text-box" />
);
