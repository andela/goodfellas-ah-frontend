import React, { Fragment } from 'react';
import ProfileArticle from '../components/shared/ProfileArticle';

const ProfileArticleList = (props) => {
  const { articles } = props;
  return (
    <Fragment>
      {
        articles.map((article) => <ProfileArticle key={article.id} author={props.author} authorImage={props.authorImage} type="favoriteArticle" article={article.article} />)
      }
    </Fragment>);
};

export default ProfileArticleList;
