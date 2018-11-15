import React from 'react';
import moment from 'moment';
import icons from '../../assets/icons.svg';
import { userPlaceholderImage, articlePlaceholderImage } from '../../mixin';

export default (props) => {
  const { article, author, authorImage } = props;
  // const reactions = article.reaction
  //   .reduce();
  return (
    <div className="profile-article hoverable">
      <img src={authorImage || userPlaceholderImage} alt="user" className="profile-article_user-img" />
      <img src={article.image || articlePlaceholderImage} alt="article-img" className="profile-article_img" />
      <h3>{ article.title }</h3>
      <p className="profile-article_username">{author}</p>
      <p className="profile-article_date">{moment(article.createdAt).format('ll')}</p>
      <p className="profile-article_read-time">{`${article.read_time} read`}</p>
      <p className="profile-article_description">{article.description}</p>
      <div className="profile-article_footer">
        <p className="profile-article_likes">
          3&nbsp;
          <svg className="icon">
            <use xlinkHref={`${icons}#like`} />
          </svg>
        </p>
        <p className="profile-article_dislikes">
          0&nbsp;
          <svg className="icon">
            <use xlinkHref={`${icons}#dislike`} />
          </svg>
        </p>
        <p className="comments">{`${article.comments.length || 0} comments`}</p>
        <p className="edit">Edit Article</p>
      </div>
    </div>
  );
};
