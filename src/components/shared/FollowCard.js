import React from 'react';
import profileImage from '../../assets/user.jpg';

export default (props) => (
  <div id={props.id} className="follow-card">
    <img src={profileImage} alt="profile" className="profile-image" />
    <div className="type">
      <b>Afeez Awoyemi</b>
      <p>Following</p>
    </div>
    <p className="about">Lorem ipsor populate this text field like magic magic magic. And if you do who is the on thea will do it lorieajj</p>
  </div>
);
