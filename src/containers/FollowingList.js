import React, { Fragment } from 'react';
import FollowCard from '../components/shared/FollowCard';

const FollowingList = (props) => (
  <Fragment>
    {
      props.following.map((following) => <FollowCard key={following.id} type="following" user={following.followedUser} />)
    }
  </Fragment>);

export default FollowingList;
