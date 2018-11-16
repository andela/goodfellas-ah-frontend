import React from 'react';
import '../styles/styles.scss';
import parser from 'react-html-parser';
import authorIcon from '../assets/author-icon.jpg';
import clock from '../assets/clock.png';
import comment from '../assets/comment.png';
import star from '../assets/star.png';
import bookmark from '../assets/bookmark.png';
import share from '../assets/share.png';
import dot from '../assets/dot-dot.png';
import love from '../assets/love.png';

const SingleArticle = (props) => {
  const { article } = props;
  return (
    <div>
      <div className="single-page">
        <div className="article-header">
          <div className="author-icon">
            <img src={authorIcon} className="author-image" alt="" />
            <div className="number">{article.read_time}</div>
            <div className="minutes">minutes</div>
          </div>
          <div className="title-author">
            <div className="article-title">{parser(article.title)}</div>
            <div className="author-name">
              <div className="name">Afeez Awoyemi</div>
              <button type="button">Follow</button>
            </div>
          </div>
        </div>
        <div className="article-container">
          <img className="article-image" src={article.image} alt="" />
          <div className="side-button">
            <img className="star" src={star} alt="" />
            <img className="bookmark" src={bookmark} alt="" />
            <img className="share" src={share} alt="" />
            <img className="dot-dot" src={dot} alt="" />
            <div className="like-count"><p>4</p></div>
            <img className="love" src={love} alt="" />
          </div>
          <div className="article-content">
            <p>{parser(article.body)}</p>

          </div>

        </div>

      </div>
      <hr className="article-line" />

      <div className="comments">
        <div className="add-comment">
          <img src={authorIcon} alt="" />
          <input type="text" placeholder="write a comment....." />
        </div>
        <div className="each-comment">
          <div className="comment-heading">
            <img src={authorIcon} alt="" />
            <div className="comment-name">Afeez Awoyemi</div>
            <div className="time-chat">
              <div>
                <img className="comment-number" src={comment} alt="" />
                <p>2</p>
              </div>
              <div>
                <img className="read-time" src={clock} alt="" />
                <p>5</p>
              </div>
            </div>
          </div>
          <div className="comment-body">
      You’re drafting an open letter.
      You have to put something up on the best platform in
      Africa before the queen asked you to stop and not do it.
          </div>

          <div className="each-reply">
            <div className="reply-heading">
              <img src={authorIcon} alt="" />
              <div className="reply-name">Afeez Awoyemi</div>
              <div className="time-chat">
                <div>
                  <img className="comment-number" src={comment} alt="" />
                  <p>2</p>
                </div>
                <div>
                  <img className="read-time" src={clock} alt="" />
                  <p>5</p>
                </div>
              </div>
            </div>
            <div className="reply-body">
      You’re drafting an open letter.
      You have to put something up on the best platform in
      Africa before the queen asked you to stop and not do it.
            </div>
          </div>

        </div>
      </div>
    </div>

  );
};

export default SingleArticle;
