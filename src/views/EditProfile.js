import React from 'react';
import Header from '../components/shared/Header';
import ProfileImageUploader from '../components/shared/ProfileImageUploader';
import '../styles/views/editProfile.scss';

export default () => (
  <div className="edit-profile">
    <Header />
    <ProfileImageUploader id="profile-image-uploader" />
    <h3 id="user-name">Fatima Akande</h3>
  </div>
);
