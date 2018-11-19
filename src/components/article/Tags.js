import React, { Component } from 'react';
import Button from '../shared/Button';

class Tags extends Component {
  state ={
    tagsCount: 0,
    tags: [],
  }

  handleSubmit = (e) => {
    // First prevent default form submission behaviour
    e.preventDefault();

    // Process accordingly
    const newTag = this.refs.getTags.value;
    const { tagsCount, tags } = this.state;

    this.refs.getTags.value = '';

    this.setState({ tagsCount: tagsCount + 1, tags: [newTag, ...tags] });
  }

  componentDidUpdate = () => {
    const { tagsCount, tags } = this.state;

    // Check if the limit for tags has been reached
    if (tagsCount === 5) {
      this.refs.getTags.disabled = true;
      this.refs.getTags.placeholder = 'You\'ve reached your limit';
    }

    const tagDiv = document.createElement('div');
    const cancelDiv = document.createElement('span');
    tagDiv.append(tags[0]);
    cancelDiv.append(' x');
    tagDiv.append(cancelDiv);
    tagDiv.className = 'new-tag';

    this.refs.displayTags.append(tagDiv);
  }

  render() {
    return (
      <div className="tags">
        <div className="tags-main">
          <h2>Add tags to your article</h2>
          <div className="tags-main-details">
            <p>Help your target audience find this article by adding up to 5 tags</p>
            <form onSubmit={this.handleSubmit}>
              <input ref="getTags" type="text" placeholder="Add a tag..." />
            </form>
            <div className="tags-wrapper" ref="displayTags" />
            <Button className="btn hero-section-greenbutton" type="button" title="Publish" />
          </div>
        </div>
      </div>
    );
  }
}

export default Tags;
