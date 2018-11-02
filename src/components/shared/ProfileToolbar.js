import React from 'react';

export default (props) => (
  <div id={props.id} className="profile-toolbar">
    <div className="toolbar-menu active">
      <p>Following</p>
      <b>45</b>
    </div>
    <div className="toolbar-menu">
      <p>Followers</p>
      <b>45</b>
    </div>
    <div className="toolbar-menu">
      <p>Articles</p>
      <b>45</b>
    </div>
    <div className="toolbar-menu">
      <p>Favorites</p>
      <b>45</b>
    </div>
  </div>
);
