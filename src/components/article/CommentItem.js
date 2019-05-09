import React, { Component } from 'react';
import moment from 'moment';
import { userPlaceholderImage } from '../../mixin';
import icons from '../../assets/icons.svg';
import CommentReplyItem from './CommentReplyItem';

moment.locale('en', {
  relativeTime: {
    s: 's',
    m: '1m',
    mm: '%dm',
    h: '1h',
    hh: '%dh',
    d: '1d',
    dd: '%dd',
    M: '1mm',
    MM: '%dmm',
    y: '1y',
    yy: '%d years',
  },
});
class CommentItem extends Component {
  state = {
    showTextarea: false,
  }

  toggleComment = () => this.setState((prevState) => ({ showTextarea: !prevState.showTextarea }))

  render() {
    const { comment, handleKeyPress, handleChange } = this.props;
    const {
      id, user, body, CommentReplies, createdAt,
    } = comment;
    const { firstname, lastname } = user;
    const { showTextarea } = this.state;
    return (
      <div className="each-comment">
        <div className="comment-heading">
          <img src={user.profile.image || userPlaceholderImage} alt="" />
          <div className="comment-name">{ `${firstname} ${lastname}`}</div>
          <div className="time-chat">
            <div>
              <svg className="comment-number"><use xlinkHref={`${icons}#comment`} /></svg>
              <p>{CommentReplies.length}</p>
            </div>
            <div>
              <svg className="read-time"><use xlinkHref={`${icons}#clock`} /></svg>
              <p>{moment(createdAt).fromNow(true)}</p>
            </div>
          </div>
        </div>
        <div className="comment-body">
          <span onClick={this.toggleComment}>{ body }</span>
          {showTextarea && (
            <div><textarea data-id={id} type="text" name="replyBody" placeholder="reply....." onChange={handleChange} onKeyPress={handleKeyPress} />
            </div>
          )}
        </div>
        {CommentReplies.length ? CommentReplies
          .map((commentReply) => (<CommentReplyItem commentReply={commentReply} />)) : null}
      </div>
    );
  }
}

export default CommentItem;
