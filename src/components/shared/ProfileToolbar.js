import React from 'react';

export default (props) => (
  <div id={props.id} className="profile-toolbar">{
    Object.keys(props.nav)
      .map((attribute) => (
        <div
          key={attribute}
          onClick={() => props.handleClick(attribute)}
          className={`toolbar-menu ${props.profile.profileView === attribute ? 'active' : ''}`}
        >
          <p>{attribute}</p>
          <b>{props.nav[attribute]}</b>
        </div>
      ))}
  </div>);
