import React from 'react';
import parser from 'react-html-parser';
import { userPlaceholderImage } from '../../mixin';

const ArticleHeader = (props) => {
  const { article } = props;
  const { read_time, user, title } = article;
  const number = read_time.split(' ')[0];
  const minute = read_time.split(' ')[1];
  return (
    <div className="article-header">
      <div className="author-icon">
        <img src={user.profile.image || userPlaceholderImage} className="author-image" alt="" />
        <div className="number">{number}</div>
        <div className="minutes">{minute}</div>
      </div>
      <div className="title-author">
        <div className="article-title">{parser(title)}</div>
        <div className="author-name">
          <div className="name">{`${user.firstname} ${user.lastname}`}</div>
          <button type="button">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
