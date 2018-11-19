import React from 'react';
import author from '../../assets/author.jpg';
import '../../styles/styles.scss';


const RecentStory = () => (
  <div className="recent-story">
    <div className="author-detail">
      <img src={author} alt="" />
      <p className="number">8</p>
      <p className="minutes">minutes</p>
    </div>
    <div className="recent-article">
      <p className="article-title">WHY MY SAVAGE CAT MEOWS BEFORE THE LIGHT</p>
      <p className="article-body">You’re drafting an open letter.
        You have to put something up on the best platform
        in Africa before the.....
      </p>
    </div>
  </div>
);


export default RecentStory;
