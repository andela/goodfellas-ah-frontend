import React, { Fragment } from 'react';
import FollowCard from '../components/shared/FollowCard';
import Loading from '../components/shared/Loading';

const FollowerList = (props) => {
  if (props.loading) return <Loading />;
  return (
    <Fragment>
      {
        Array(5).fill().map((x, i) => <FollowCard key={i} type="follower" />)
      }
    </Fragment>);
};

export default FollowerList;
