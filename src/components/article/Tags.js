import React, { Component } from 'react';
import Button from '../shared/Button';
// import Tag from '../shared/tag';

class Tags extends Component {
  state = {
    tagsCount: 0,
    tags: [],
  };

  handleSubmit = (e) => {
    // First prevent default form submission behaviour
    e.preventDefault();

    // Process accordingly
    const newTag = this.refs.getTags.value;
    const { tagsCount, tags } = this.state;

    this.refs.getTags.value = '';

    this.setState({
      tags: [...tags, { tag: newTag, tagsCount: tagsCount + 1 }],
      tagsCount: tagsCount + 1,
    });
  };

  componentDidUpdate = () => {
    console.log(this.state);
    const { tags } = this.state;

    // Check if the limit for tags has been reached
    if (tags.length === 5) {
      this.refs.getTags.disabled = true;
      this.refs.getTags.placeholder = 'You\'ve reached your limit';
    } else {
      this.refs.getTags.disabled = false;
      this.refs.getTags.placeholder = 'Add a tag...';
    }
  };

  handleClick = (e) => {
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
              {tags.map((tag) => {
                return (
                  <div key={tag.tagsCount} className="new-tag">
                    <p>{tag.tag} </p>
                    <span onClick={this.handleClick} className="new-tag-cancel">
                      x
                    </span>
                  </div>
                );
              })}
            </div>
            <Button
              className="btn hero-section-greenbutton"
              type="button"
              title="Publish"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Tags;
