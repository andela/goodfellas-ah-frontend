import React, { Fragment } from 'react';
import ProfileArticle from '../components/shared/ProfileArticle';
import Loading from '../components/shared/Loading';

const FollowerList = (props) => {
  if (props.loading) return <Loading />;
  return (
    <Fragment>
      {
        Array(5).fill().map((x, i) => <ProfileArticle key={i} type="article" />)
      }
    </Fragment>);
};

export default FollowerList;
