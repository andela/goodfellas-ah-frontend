import React, { Fragment } from 'react';
import FollowCard from './RelationshipCard';

const FollowingList = (props) => {
  const { following } = props;
  return (
    <Fragment>
      {
        following.map((user) => <FollowCard key={user.id} type="following" user={user.followedUser} />)
      }
    </Fragment>
  );
};

export default FollowingList;
