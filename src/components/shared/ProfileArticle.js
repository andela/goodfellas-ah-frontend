import React from 'react';
import icons from '../../assets/icons.svg';
import userImg from '../../assets/user.jpg';
import articleImg from '../../assets/heroImage2.jpg';

export default (props) => (
  <div id={props.id} className="profile-article">
    <img src={userImg} alt="user" className="user-img" />
    <img src={articleImg} alt="article-img" className="article-img" />
    <h3>About Chinas rising sun</h3>
    <p className="username">Fatima Akande</p>
    <p className="date">Jan 5, 2018</p>
    <p className="read-time">4 minutes read</p>
    <p className="description">You’re drafting an open letter. You have to put something up on Medium. You have to let people know that you’re fed up with this place. You have to write stories just....</p>
    <div className="footer">
      <p className="likes">
        3&nbsp;
        <svg className="icon">
          <use xlinkHref={`${icons}#like`} />
        </svg>
      </p>
      <p className="dislikes">
        0&nbsp;
        <svg className="icon">
          <use xlinkHref={`${icons}#dislike`} />
        </svg>
      </p>
      <p className="comments">3 Comments</p>
      <p className="edit">Edit Article</p>
    </div>
  </div>
);
