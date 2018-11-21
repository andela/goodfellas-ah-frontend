import React from 'react';
import moment from 'moment';
import parser from 'react-html-parser';
import icons from '../../assets/icons.svg';
import { userPlaceholderImage, articlePlaceholderImage, filterReactions } from '../../mixin';

export default (props) => {
  const {
    article,
    author,
    authorImage,
    ownProfile,
  } = props;

  return (
    <div className="profile-article hoverable">
      <img src={authorImage || userPlaceholderImage} alt="user" className="profile-article_user-img" />
      <div className="profile-article_img" style={{ backgroundImage: `url(${article.image || articlePlaceholderImage})` }} />
      <h3>{ parser(article.title) }</h3>
      <p className="profile-article_username">{author}</p>
      <p className="profile-article_date">{moment(article.createdAt).format('ll')}</p>
      <p className="profile-article_read-time">{`${article.read_time} read`}</p>
      <p className="profile-article_description">{parser(article.description)}</p>
      <div className="profile-article_footer">
        <p className="profile-article_likes">
          {filterReactions(article.reactions).likes}&nbsp;
          <svg className="icon">
            <use xlinkHref={`${icons}#like`} />
          </svg>
        </p>
        <p className="profile-article_dislikes">
          {filterReactions(article.reactions).dislikes}&nbsp;
          <svg className="icon">
            <use xlinkHref={`${icons}#dislike`} />
          </svg>
        </p>
        <p className="comments">{`${article.comments.length || 0} comments`}</p>
        {ownProfile && <p className="edit">Edit Article</p>}
      </div>
    </div>
  );
};
