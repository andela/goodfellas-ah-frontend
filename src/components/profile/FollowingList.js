import React, { Fragment } from 'react';
import FollowCard from './RelationshipCard';
import icons from '../../assets/icons.svg';

const FollowingList = (props) => {
  const { following, userFullName } = props;
  return (
    <Fragment>
      {
        following.length === 0
          ? (
            <div className="no-record centralizer">
              <svg className="icon">
                <use xlinkHref={`${icons}#sad`} />
              </svg>&nbsp;&nbsp;
              <span>{userFullName} is not following anyone</span>
            </div>
          )
          : following.map((user) => <FollowCard key={user.id} type="following" user={user.followedUser} />)
      }
    </Fragment>
  );
};

export default FollowingList;
