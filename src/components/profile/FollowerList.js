import React, { Fragment } from 'react';
import FollowCard from './RelationshipCard';
import icons from '../../assets/icons.svg';

const FollowerList = (props) => {
  const { followers, userFullName } = props;
  return (
    <Fragment>
      {
        followers.length === 0
          ? (
            <div className="no-record centralizer">
              <svg className="icon">
                <use xlinkHref={`${icons}#sad`} />
              </svg>&nbsp;&nbsp;
              <span>No follower for {userFullName}</span>
            </div>
          )
          : followers.map((user) => <FollowCard key={user.id} type="follower" user={user.follower} />)
      }
    </Fragment>
  );
};

export default FollowerList;
