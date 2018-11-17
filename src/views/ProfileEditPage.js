import React from 'react';
import ProfileEdit from '../containers/ProfileEdit';
import Body from '../components/layout/DefaultLayout';

export default(props) => (
  <Body {...props} className="edit-profile">
    <ProfileEdit />
  </Body>
);
