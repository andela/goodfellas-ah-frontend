import React from 'react';
import Comment from './shared/Comment';
import '../styles/styles.scss';
import star from '../assets/star.png';
import bookmark from '../assets/bookmark.png';
import share from '../assets/share.png';
import dot from '../assets/dot-dot.png';
import love from '../assets/love.png';

const SingleArticle = (props) => {
  const { article } = props;
  const {
    read_time, user, title, image, body,
  } = article;
  const number = read_time.split(' ')[0];
  const minute = read_time.split(' ')[1];
  return (
    <div>
      <div className="single-page">
        <div className="article-header">
          <div className="author-icon">
            <img src={user.profile.image} className="author-image" alt="" />
            <div className="number">{number}</div>
            <div className="minutes">{minute}</div>
          </div>
          <div className="title-author">
            <div className="article-title">{title}</div>
            <div className="author-name">
              <div className="name">{`${user.firstname} ${user.lastname}`}</div>
              <button type="button">Follow</button>
            </div>
          </div>
        </div>
        <div className="article-container">
          <img className="article-image" src={image} alt="" />
          <div className="side-button">
            <img className="star" src={star} alt="" />
            <img className="bookmark" src={bookmark} alt="" />
            <img className="share" src={share} alt="" />
            <img className="dot-dot" src={dot} alt="" />
            <div className="like-count"><p>4</p></div>
            <img className="love" src={love} alt="" />
          </div>
          <div className="article-content">
            <p>{body}</p>

          </div>

        </div>

      </div>
      <hr className="article-line" />
      <Comment />
    </div>

  );
};

export default SingleArticle;
