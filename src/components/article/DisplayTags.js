import React from 'react';

export const DisplayTags = (props) => {
  const { articles } = props;
  let keyTrack = 0;
  return (
    <div className="tags-display">
      {articles.tagList.map((tag) => {
        keyTrack += 1;
        return <p key={keyTrack} className="new-tag">{tag}</p>;
      })}
    </div>
  );
};

export default DisplayTags;
