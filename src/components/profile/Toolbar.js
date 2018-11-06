import React from 'react';

export default (props) => {
  const { nav } = props;
  return (
    <div className="profile-toolbar">{
      Object.keys(nav)
        .map((tab) => (
          <div
            key={tab}
            onClick={() => props.handleClick(tab)}
            className={`toolbar-menu ${props.profile.profileView === tab ? 'active' : ''}`}
          >
            <p>{tab}</p>
            <b>{props.nav[tab]}</b>
          </div>
        ))}
    </div>);
};
