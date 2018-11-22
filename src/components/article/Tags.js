import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import Button from '../shared/Button';
import { addTags } from '../../actions/articleActions';
import publishArticle from '../../actions/publishArticle';

export class Tags extends Component {
  state = {
    tagsCount: 0,
    tags: [],
  };

  handleSubmit = (e) => {
    // First prevent default form submission behaviour
    e.preventDefault();

    //  Check for empty spaces and process accordingly
    const newTag = this.refs.getTags.value;
    const { tagsCount, tags } = this.state;

    if (newTag.trim() !== '') {
      this.setState({
        tags: [...tags, { tag: newTag.toLowerCase().trim(), tagsCount: tagsCount + 1 }],
        tagsCount: tagsCount + 1,
      });
    }

    // Reset input field
    e.target.reset();
  };

  handleClick = (e) => {
    e.preventDefault();

    const { tags } = this.state;
    const currentTag = e.target.previousSibling.textContent;
    const newState = [];

    // Check for the tag being deleted in the state

    for (let index = 0; index < tags.length; index += 1) {
      const element = tags[index];
      // create a new state without that tag in it

      if (element.tag !== currentTag.trim()) {
        newState.push({ tag: element.tag, tagsCount: element.tagsCount });
      }
    }

    // update the state with the new state object
    this.setState({
      tags: [...newState],
    });
  };

  componentDidUpdate = () => {
    const { tags } = this.state;
    const { publishedArticle, history, publishedArticleError } = this.props;

    // Check if the limit for tags has been reached
    if (tags.length === 5) {
      this.refs.getTags.disabled = true;
      this.refs.getTags.placeholder = 'You\'ve reached your limit';
    } else {
      this.refs.getTags.disabled = false;
      this.refs.getTags.placeholder = 'Add a tag...';
    }

    // Check if article has been published then publish Tags
    if (publishedArticle) {
      this.publishTags();
    }

    if (
      publishedArticleError.status.error === false
      && publishedArticleError.status.success === true) {
      swal('Good job!', 'Article Saved Successfully!', 'success');
      setTimeout(() => history.push(`/articles/${publishedArticle.slug}`), 3000);
    }
    if (publishedArticleError.status.error === true) {
      swal('Error', 'Article failed to publish', 'error');
    }
  };

  publishArticle = async () => {
    const { location, publishArticle: publishNewArticle } = this.props;

    await publishNewArticle(location.state.articlePayload);
  };

  publishTags = async () => {
    const { tags } = this.state;
    const {
      addTags: addNewTags,
      publishedArticle,
    } = this.props;
    const tagsList = tags.map((eachTag) => {
      const { tag } = eachTag;
      return tag;
    });

    console.log(publishedArticle);
    await addNewTags(tagsList, publishedArticle.slug);
  };

  render() {
    const { tags } = this.state;
    return (
      <div className="tags">
        <div className="tags-main">
          <h2>Add tags to your article</h2>
          <div className="tags-main-details">
            <p>
              Help your target audience find this article by adding up to 5 tags
            </p>
            <form onSubmit={this.handleSubmit}>
              <input ref="getTags" type="text" placeholder="Add a tag..." />
            </form>
            <div className="tags-wrapper">
              {tags.map((eachTag) => {
                const { tagsCount, tag } = eachTag;
                return (
                  <div key={tagsCount} className="new-tag">
                    <p>{tag} </p>
                    <span onClick={this.handleClick} className="new-tag-cancel">
                      x
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="publish-article-button" onClick={this.publishArticle}>
              <Button
                className="btn hero-section-greenbutton"
                type="submit"
                title="Publish"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


function mapStatetoProps(state) {
  return {
    tags: state.articles.tags,
    tagsError: state.articles.tagsError,
    publishedArticle: state.publishArticleReducer.publishedArticle.article,
    publishedArticleError: state.publishArticleReducer,
  };
}

export default connect(mapStatetoProps, { addTags, publishArticle })(Tags);
