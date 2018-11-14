import React, { Fragment } from 'react';
import FollowCard from './RelationshipCard';
import icons from '../../assets/icons.svg';

const FollowerList = (props) => {
  const {
    followers,
    userFullName,
    ownProfile,
    history,
  } = props;
  const handleClick = (userId) => {
    history.push(`/user/profile/${userId}`);
  };
  return (
    <Fragment>
      {
        followers.length === 0
          ? (
            <div className="no-record centralizer">
              <svg className="icon">
                <use xlinkHref={`${icons}#sad`} />
              </svg>&nbsp;&nbsp;
              <span>{ownProfile ? 'No one is following you.' : `${userFullName} has no followers.`}</span>
            </div>
          )
          : followers.map((user) => <FollowCard handleClick={handleClick} key={user.id} type="follower" userId={user.followerId} user={user.follower} />)
      }
    </Fragment>
  );
};

export default FollowerList;
