import React from 'react';

export default (props) => (
  <div id={props.id} className="follow-card hoverable">
    <img src={props.user.profile.image || 'https://res.cloudinary.com/drmmqcxkc/image/upload/v1541506955/user-placeholder.png'} alt="profile" className="profile-image" />
    <div className="type">
      <b>{`${props.user.firstname} ${props.user.lastname}`}</b>
      <p>{props.type}</p>
    </div>
    <p className={`about ${props.user.profile.bio ? '' : 'no-bio'}`}>{props.user.profile.bio || `${props.user.firstname} ${props.user.lastname} has no bio.`}</p>
  </div>
);
