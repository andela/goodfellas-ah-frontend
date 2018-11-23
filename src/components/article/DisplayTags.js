import React from 'react';

export const DisplayTags = (props) => {
  const { articles } = props;
  let keyTrack = 0;

  const tagCheck = () => {
    let displayTagsResult;
    if (articles.tagList === null) {
      displayTagsResult = null;
    } else {
      displayTagsResult = (
        <div className="tags-display">
          {articles.tagList.map((tag) => {
            keyTrack += 1;
            return <p key={keyTrack} className="new-tag">{tag}</p>;
          })}
        </div>
      );
    }
    return displayTagsResult;
  };

  return (
    tagCheck()
  );
};

export default DisplayTags;
