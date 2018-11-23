import React, { Component } from 'react';
import { connect } from 'react-redux';
import icons from '../../assets/icons.svg';

class SideButtons extends Component {
  state = {
    extraButtons: false,
  }

  showExtraButtons = () => {
    this.setState((prevState) => ({ extraButtons: !prevState.extraButtons }));
  }

  AddExtraButtons = (className) => (
    <div className={`extra-buttons ${className}`}>
      <svg id="delete" className="icon" title="Delete this article"><use xlinkHref={`${icons}#delete-icon`} /></svg>
      <svg id="edit" title="Edit this article"><use xlinkHref={`${icons}#edit`} /></svg>
      <svg id="flag" title="Report this article"><use xlinkHref={`${icons}#flag`} /></svg>
      <svg id="dislike" title="Dislike this article"><use xlinkHref={`${icons}#dislike`} /></svg>
    </div>
  )


  render() {
    const { extraButtons } = this.state;
    console.log(this.props.article.slug);
    return (
      <div className="side-button">
        <svg id="star" title="Like this article"><use xlinkHref={`${icons}#star`} /></svg>
        <svg id="bookmark" onClick={() => console.log('I clicked here')} title="Report this article"><use xlinkHref={`${icons}#bookmark`} /></svg>
        <svg id="share" title="Report this article"><use xlinkHref={`${icons}#share`} /></svg>
        <svg id="more" onClick={this.showExtraButtons} title="Show more buttons"><use xlinkHref={`${icons}#more`} /></svg>
        {this.AddExtraButtons(extraButtons ? 'active' : '')}
        <div id="like-count"><p>4</p></div>
        <svg id="love" title="Report this article"><use xlinkHref={`${icons}#gratipay`} /></svg>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   error: state.articles.articleError,
//   bookmarked: state.articles.article,
// });

export default connect(null)(SideButtons);
