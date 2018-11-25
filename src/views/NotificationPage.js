import React from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import Notifications from '../containers/Notifications';

const NotificationsPage = (props) => (
  <div>
    <DefaultLayout>
      <Notifications {...props} />
    </DefaultLayout>

  </div>
);

export default NotificationsPage;
