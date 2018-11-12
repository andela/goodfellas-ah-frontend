import React from 'react';

export default (props) => {
  const {
    user,
    type,
    userId,
    handleClick,
  } = props;
  const fullName = `${user.firstname} ${user.lastname}`;
  return (
    <div onClick={() => handleClick(userId)} className="follow-card hoverable">
      <img src={user.profile.image || 'https://res.cloudinary.com/drmmqcxkc/image/upload/v1541506955/user-placeholder.png'} alt="profile" className="follow-card_profile-image" />
      <div className="follow-card_type">
        <b>{fullName}</b>
        <p>{type}</p>
      </div>
      <p className={`follow-card_about ${user.profile.bio ? '' : 'no-bio'}`}>{user.profile.bio || `${fullName} has no bio.`}</p>
    </div>
  );
};
