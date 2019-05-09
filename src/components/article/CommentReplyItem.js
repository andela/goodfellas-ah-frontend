import React from 'react';
import moment from 'moment';
import { userPlaceholderImage } from '../../mixin';
import icons from '../../assets/icons.svg';

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
const commentReplyReplyItem = ({ commentReply }) => {
  const {
    user, body, createdAt,
  } = commentReply;
  const { firstname, lastname } = user;
  return (
    <div className="each-reply">
      <div className="reply-heading">
        <img src={user.profile.image || userPlaceholderImage} alt="" />
        <div className="reply-name">{`${firstname} ${lastname}`}</div>
        <div className="time-chat">
          <div>
            <svg className="read-time"><use xlinkHref={`${icons}#clock`} /></svg>
            <p>{moment(createdAt).fromNow(true)}</p>
          </div>
        </div>
      </div>
      <div className="reply-body">
        {body}
      </div>
    </div>
  );
};

export default commentReplyReplyItem;
