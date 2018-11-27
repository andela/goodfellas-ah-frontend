import React from 'react';
import { userPlaceholderImage } from '../../mixin';
import CommentItem from './CommentItem';

const Comment = ({
  handleKeyPress, handleChange, comments, article,
}) => (
  <div className="comments">
    <div className="add-comment">
      <img src={article.user.profile.image || userPlaceholderImage} alt="" />
      <textarea type="text" name="commentBody" placeholder="write a comment....." onKeyPress={handleKeyPress} onChange={handleChange} />
    </div>
    {comments.comments && comments.comments.length ? comments.comments
      .map((comment) => (
        <CommentItem
          handleChange={handleChange}
          handleKeyPress={handleKeyPress}
          comment={comment}
        />)) : null}
  </div>
);

export default Comment;
