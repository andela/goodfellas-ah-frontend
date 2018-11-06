import React, { Fragment } from 'react';
import FollowCard from './RelationshipCard';

const FollowerList = (props) => {
  const { followers } = props;
  return (
    <Fragment>
      {
        followers.map((user) => <FollowCard key={user.id} type="follower" user={user.follower} />)
      }
    </Fragment>
  );
};

export default FollowerList;
