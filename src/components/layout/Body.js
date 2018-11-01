import React from 'react';
import Header from '../shared/Header';
import '../../styles/components/body.scss';

export default (props) => (
  <div className={`body ${props.className || ''}`}>
    <Header />
    { props.children }
  </div>
);
