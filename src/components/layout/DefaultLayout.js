import React from 'react';
import Header from '../shared/Header';

export default (props) => {
  const { className, children } = props;
  return (
    <div className={`body ${className || ''}`}>
      <Header />
      { children }
    </div>
  );
};
