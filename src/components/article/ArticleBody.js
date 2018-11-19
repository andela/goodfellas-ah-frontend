import React, { Component } from 'react';
import star from '../../assets/star.png';
import bookmark from '../../assets/bookmark.png';
import share from '../../assets/share.png';
import dot from '../../assets/dot-dot.png';
import love from '../../assets/love.png';
import remove from '../../assets/delete.png';
import edit from '../../assets/edit.png';
import report from '../../assets/report.png';


class ArticleBody extends Component {
  state = {
    extraButtons: false,
  }

  clickMore = () => {
    this.setState((prevState) => ({ extraButtons: !prevState.extraButtons }));
  }

  AddExtraButtons = (className) => (
    <div className={`extra-buttons ${className}`}>
      <img title="reppr8t" src={remove} alt="" />
      <img src={edit} alt="" />
      <img src={report} alt="" />
    </div>
  )


  render() {
    const { article } = this.props;
    const { extraButtons } = this.state;
    const { image, body } = article;
    return (
      <div className="article-container">
        <img className="article-image" src={image} alt="" />
        <div className="side-button">
          <img className="star" src={star} alt="" />
          <img className="bookmark" src={bookmark} alt="" />
          <img className="share" src={share} alt="" />
          <img onClick={this.clickMore} className="dot-dot" src={dot} alt="" />
          {this.AddExtraButtons(extraButtons ? 'active' : '')}
          <div className="like-count"><p>4</p></div>
          <img className="love" src={love} alt="" />
        </div>
        <div className="article-content">
          <p>{body}</p>

        </div>

      </div>
    );
  }
}

export default ArticleBody;
