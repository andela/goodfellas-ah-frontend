import React from 'react';
import icons from '../../assets/icons.svg';

const ProfileImageUploader = (props) => (
  <div id={props.id} className="profile-image profile-image-uploader">
    <svg className="icon">
      <use xlinkHref={`${icons}#camera`} />
    </svg>
  </div>
);

export default ProfileImageUploader;
