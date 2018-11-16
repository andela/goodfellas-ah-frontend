import React from 'react';
import Profile from '../containers/Profile';
import Body from '../components/layout/DefaultLayout';

export default (props) => (
  <Body {...props} className="profile">
    <Profile {...props} />
  </Body>
);
