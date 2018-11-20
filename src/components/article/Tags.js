import React, { Component } from 'react';
import Button from '../shared/Button';

class Tags extends Component {
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
        tags: [...tags, { tag: newTag.trim(), tagsCount: tagsCount + 1 }],
        tagsCount: tagsCount + 1,
      });
    }

    // Reset input field
    e.target.reset();
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

  componentDidUpdate = () => {
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
