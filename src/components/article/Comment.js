import React from 'react';
import clock from '../../assets/clock.png';
import comment from '../../assets/comment.png';
import { userPlaceholderImage } from '../../mixin';

const Comment = () => (
  <div className="comments">
    <div className="add-comment">
      <img src={userPlaceholderImage} alt="" />
      <input type="text" placeholder="write a comment....." />
    </div>
    <div className="each-comment">
      <div className="comment-heading">
        <img src={userPlaceholderImage} alt="" />
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
          <img src={userPlaceholderImage} alt="" />
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
);

export default Comment;
