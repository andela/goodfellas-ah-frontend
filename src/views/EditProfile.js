import React from 'react';
import Body from '../components/layout/Body';
import ProfileImageUploader from '../components/shared/ProfileImageUploader';
import InputBox from '../components/shared/InputBox';
import TextBox from '../components/shared/TextBox';
import ButtonOutline from '../components/shared/ButtonOutline';
import '../styles/views/editProfile.scss';

export default () => (
  <Body className="edit-profile">
    <ProfileImageUploader id="profile-image-uploader" />
    <h3 id="user-name">Fatima Akande</h3>
    <InputBox placeholder="Username" />
    <TextBox id="bio-box" placeholder="Enter a short bio" />
    <div>
      <ButtonOutline id="save-button" color="#63ce96">Save</ButtonOutline>
      <ButtonOutline>Cancel</ButtonOutline>
    </div>
  </Body>
);
