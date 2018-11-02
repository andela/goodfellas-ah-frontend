import React from 'react';
import Header from '../shared/Header';

export default (props) => (
  <div className={`body ${props.className || ''}`}>
    <Header />
    { props.children }
  </div>
);
