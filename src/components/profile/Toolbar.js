import React from 'react';

export default (props) => {
  const { nav, profileView, handleClick } = props;
  return (
    <div className="profile-toolbar">{
      Object.keys(nav)
        .map((tab) => (
          <div
            key={tab}
            onClick={() => handleClick(tab)}
            className={`toolbar-menu ${profileView === tab ? 'active' : ''}`}
          >
            <p>{tab}</p>
            <b>{nav[tab]}</b>
          </div>
        ))}
    </div>);
};
