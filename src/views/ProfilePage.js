import React from 'react';
import Profile from '../containers/Profile';
import Notification from '../components/Notification';

export default(props) => (
  <div>
    <Profile {...props} />
    <Notification />
  </div>
);
