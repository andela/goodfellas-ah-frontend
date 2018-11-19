import React, { Component } from 'react';
import Button from '../shared/Button';

class Tags extends Component {
  state ={
    tagsCount: 0,
    tags: [],
  }

  render() {
    return (
      <div className="tags">
        <div className="tags-main">
          <h2>Add tags to your article</h2>
          <div className="tags-main-details">
            <p>Help your target audience find this article, add tags</p>
            <form onSubmit={this.handleSubmit}>
              <input ref="getTags" type="text" placeholder="Add a tag..." />
            </form>
            <div ref="displayTags" />
            <Button className="btn hero-section-greenbutton" type="button" title="Publish" />
          </div>
        </div>
      </div>
    );
  }
}

export default Tags;
