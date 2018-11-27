import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import icons from '../../assets/icons.svg';

class SideButtons extends Component {
  state = {
    extraButtons: false,
    showSideButton: true,
  }

  authorizedButtons = () => {
    const { userId, article } = this.props;
    if (userId === article.authorId) {
      return (
        <div>
          <svg id="delete" className="icon" title="Delete this article"><use xlinkHref={`${icons}#delete-icon`} /></svg>
          <svg id="edit" title="Edit this article"><Link className="link" to={`/articles/edit/${article.slug}`}><use xlinkHref={`${icons}#edit`} /></Link></svg>
        </div>
      );
    }
  }

  showExtraButtons = () => {
    this.setState((prevState) => ({ extraButtons: !prevState.extraButtons }));
  }

  toggleSideButton = () => {
    this.setState((prevState) => ({ showSideButton: !prevState.showSideButton }));
  }

  AddExtraButtons = (className) => (
    <div className={`extra-buttons ${className}`}>
      {this.authorizedButtons()}
      <svg id="flag" title="Report this article"><use xlinkHref={`${icons}#flag`} /></svg>
      <svg id="dislike" title="Dislike this article"><use xlinkHref={`${icons}#dislike`} /></svg>
    </div>
  )


  render() {
    const { extraButtons, showSideButton } = this.state;
    return (
      <Fragment>
        <span className="small-button" onClick={this.toggleSideButton}>click</span>
        <div className={`side-button ${showSideButton ? 'active' : ''}`}>
          <svg id="star" title="Like this article"><use xlinkHref={`${icons}#star`} /></svg>
          <svg id="bookmark" title="Report this article"><use xlinkHref={`${icons}#bookmark`} /></svg>
          <svg id="share" title="Share this article"><use xlinkHref={`${icons}#share`} /></svg>
          <svg id="more" onClick={this.showExtraButtons} title="Show more buttons"><use xlinkHref={`${icons}#more`} /></svg>
          {this.AddExtraButtons(extraButtons ? 'active' : '')}
          <div id="like-count"><p>4</p></div>
          <svg id="love" title="Report this article"><use xlinkHref={`${icons}#gratipay`} /></svg>
        </div>
      </Fragment>
    );
  }
}

export default SideButtons;
