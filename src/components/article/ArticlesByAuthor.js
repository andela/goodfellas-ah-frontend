import React, { Fragment } from 'react';
import ProfileArticle from './Profile';

const ProfileArticleList = (props) => {
  const { articles } = props;
  return (
    <Fragment>
      {
        articles.map((article) => <ProfileArticle key={article.id} author={props.author} authorImage={props.authorImage} type="article" article={article} />)
      }
    </Fragment>);
};

export default ProfileArticleList;
