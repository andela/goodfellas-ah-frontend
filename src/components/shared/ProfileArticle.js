import React from 'react';
import moment from 'moment';
import icons from '../../assets/icons.svg';

export default (props) => {
  const { article } = props;
  // const reactions = article.reaction
  //   .reduce();
  return (
    <div id={props.id} className="profile-article hoverable">
      <img src={props.authorImage || 'https://res.cloudinary.com/drmmqcxkc/image/upload/v1541506955/user-placeholder.png'} alt="user" className="user-img" />
      <img src={article.image || 'https://res.cloudinary.com/drmmqcxkc/image/upload/v1541513674/Authors%20Haven/article-placeholder.jpg'} alt="article-img" className="article-img" />
      <h3>{ article.title }</h3>
      <p className="username">{props.author}</p>
      <p className="date">{moment(article.createdAt).format('ll')}</p>
      <p className="read-time">{`${article.read_time} read`}</p>
      <p className="description">{article.body}</p>
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
        <p className="comments">{`${article.comments.length} comments`}</p>
        <p className="edit">Edit Article</p>
      </div>
    </div>
  );
};
