import React, { Fragment } from 'react';
import ProfileArticle from './Profile';
import icons from '../../assets/icons.svg';

const ProfileArticleList = (props) => {
  const {
    articles,
    userFullName,
    author,
    authorImage,
  } = props;
  return (
    <Fragment>
      {
        articles.length === 0
          ? (
            <div className="no-record centralizer">
              <svg className="icon">
                <use xlinkHref={`${icons}#sad`} />
              </svg>&nbsp;&nbsp;
              <span>{userFullName} has not favorited any articles</span>
            </div>
          )
          : articles.map((article) => <ProfileArticle key={article.id} author={author} authorImage={authorImage} type="favoriteArticle" article={article.article} />)
      }
    </Fragment>);
};

export default ProfileArticleList;
