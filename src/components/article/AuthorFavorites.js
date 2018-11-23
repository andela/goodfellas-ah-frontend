import React, { Fragment } from 'react';
import ProfileArticle from './Profile';
import icons from '../../assets/icons.svg';

const ProfileArticleList = (props) => {
  const {
    articles,
    userFullName,
    ownProfile,
    userId,
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
              <span>{ownProfile ? 'You have not favorited any articles.' : `${userFullName} has not favorited any articles.`}</span>
            </div>
          )
          : articles.map((article) => <ProfileArticle userId={userId} key={article.id} author={`${article.article.user.firstname} ${article.article.user.lastname}`} authorImage={article.article.user.profile.image} type="favoriteArticle" article={article.article} />)
      }
    </Fragment>);
};

export default ProfileArticleList;
