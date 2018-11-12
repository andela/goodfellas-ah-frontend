import React from 'react';
import '../styles/styles.scss';
import authorIcon from '../assets/author-icon.jpg';
import articleImage from '../assets/article-image.jpg';
import clock from '../assets/clock.png';
import comment from '../assets/comment.png';
import star from '../assets/star.png';
import bookmark from '../assets/bookmark.png';
import share from '../assets/share.png';
import dot from '../assets/dot-dot.png';
import love from '../assets/love.png';

const SingleArticle = () => (
  <div>
    <div className="single-page">
      <div className="article-header">
        <div className="author-icon">
          <img src={authorIcon} className="author-image" alt="" />
          <div className="number">8</div>
          <div className="minutes">minutes</div>
        </div>
        <div className="title-author">
          <div className="article-title">dark blue hills, anthology of an aquaphobic frog</div>
          <div className="author-name">
            <div className="name">Afeez Awoyemi</div>
            <button type="button">Follow</button>
          </div>
        </div>
      </div>
      <div className="article-container">
        <img className="article-image" src={articleImage} alt="" />
        <div className="side-button">
          <img className="star" src={star} alt="" />
          <img className="bookmark" src={bookmark} alt="" />
          <img className="share" src={share} alt="" />
          <img className="dot-dot" src={dot} alt="" />
          <div className="like-count"><p>4</p></div>
          <img className="love" src={love} alt="" />
        </div>
        <div className="article-content"><p>
    Software is a highly technical field, so a senior engineer obviously can’t be weak in
    knowing a lot about how things work.
    But anyone at a senior level is expected to be what I call a “specialized generalist”;
    they should have been doing development long enough that they’ve seen a wide variety of issues.
    They have likely gotten deep exposure to the problems of a specific field or industry,
    which is important because understanding the details of multiple domains can help the developer
    transition to other areas with more than just a broad surface knowledge.
        </p>

          <p>
    To truly be senior, you need to make the hard calls and make them right.
    This deep experience also builds the wisdom to see how choices made early in development pay off later.
    A senior developer needs to know “where the bodies are buried.”
    Time spent in the deep end lends itself to an intuitive knowledge of
    where problems will occur 10 steps down the line. And this wisdom is surprisingly transferable
    to other situations; at a minimum, senior developers are able to realize when they don’t know
    all the secret potential dangers and act with caution. Software is a highly technical field,
    so a senior engineer obviously can’t be weak in knowing a lot about how things work.
    But anyone at a senior level is expected to be what I call a “specialized generalist”;
    they should have been doing development long enough that they’ve seen a wide variety of issues.
    They have likely gotten deep exposure to the problems of a specific field or industry,
    which is important because understanding the details of multiple domains can help the
    developer transition to other areas with more than just a broad surface knowledge.
        </p>

          <p>
    To truly be senior, you need to make the hard calls and make them right.
    This deep experience also builds the wisdom to see how choices made early in development pay off later.
    A senior developer needs to know “where the bodies are buried.”
    Time spent in the deep end lends itself to an intuitive knowledge of where problems will occur 10 steps down the line.
    And this wisdom is surprisingly transferable to other situations; at a minimum,
    senior developers are able to realize when they don’t know all the secret potential dangers and act with caution.
    Software is a highly technical field, so a senior engineer obviously can’t be weak in knowing a lot about how things work.
    But anyone at a senior level is expected to be what I call a “specialized generalist”;
    they should have been doing development long enough that they’ve seen a wide variety of issues.
    They have likely gotten deep exposure to the problems of a specific field or industry,
    which is important because understanding the details of multiple domains can help the developer
    transition to other areas with more than just a broad surface knowledge.
        </p>

          <p>
   To truly be senior, you need to make the hard calls and make them right.
   This deep experience also builds the wisdom to see how choices made early in development pay off later.
   A senior developer needs to know “where the bodies are buried.”
        </p>

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

export default SingleArticle;
