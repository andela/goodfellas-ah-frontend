import React, { Fragment } from 'react';
import ProfileArticle from './Profile';
import icons from '../../assets/icons.svg';

const BookmarkedArticleList = (props) => {
  const {
    articles,
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
              <span>You have not bookmarked any articles</span>
            </div>
          )
          : articles.map((article) => {
            const { article: { user: { firstname, lastname, profile: { image } } } } = article;
            return (<ProfileArticle key={article.id} author={`${firstname} ${lastname}`} authorImage={image} type="favoriteArticle" article={article.article} />)
          })
      }
    </Fragment>);
};

export default BookmarkedArticleList;
