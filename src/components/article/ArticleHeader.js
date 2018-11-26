import React, { Component } from 'react';
import parser from 'react-html-parser';
import { userPlaceholderImage } from '../../mixin';

class ArticleHeader extends Component {
  followButton = () => {
    const { userId, article } = this.props;
    if (userId !== article.authorId) {
      return (<button type="button">Follow</button>);
    }
  }

  render() {
    const { article } = this.props;
    const { read_time, user, title } = article;
    const number = read_time.split(' ')[0];
    const minute = read_time.split(' ')[1];
    return (
      <div className="article-header">
        <div className="author-icon">
          <img src={user.profile.image || userPlaceholderImage} className="author-image" alt="" />
          <div className="article-title">{parser(title)}</div>
        </div>
        <div className="author-name">
          <div className="read-time">
            <div className="number">{number}</div>
            <div className="minutes">{minute}</div>
          </div>
          <div className="name">{`${user.firstname} ${user.lastname}`}</div>
          {this.followButton()}
        </div>
      </div>
    );
  }
}

export default ArticleHeader;
