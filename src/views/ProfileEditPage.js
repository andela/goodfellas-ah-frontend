import React from 'react';
import Body from '../components/layout/DefaultLayout';
import ProfileImageUploader from '../components/profile/ImageUploader';
import InputBox from '../components/shared/InputBox';
import TextBox from '../components/shared/TextBox';

export default () => (
  <Body className="edit-profile">
    <ProfileImageUploader />
    <h3 id="user-name" className="username">Fatima Akande</h3>
    <InputBox placeholder="Username" />
    <TextBox placeholder="Enter a short bio" />
    <div>
      <button type="button" id="save-button" className="button outline">Save</button>
      <button type="button" className="button outline">Cancel</button>
    </div>
  </Body>
);
