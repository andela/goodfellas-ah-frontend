import React, { Fragment } from 'react';
import FollowCard from '../components/shared/FollowCard';

const FollowerList = (props) => (
  <Fragment>
    {
      props.followers.map((follower) => <FollowCard key={follower.id} type="follower" user={follower.follower} />)
    }
  </Fragment>);

export default FollowerList;
