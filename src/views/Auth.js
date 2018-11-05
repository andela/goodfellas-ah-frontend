import React from 'react';
import author from '../assets/author.jpg';


export default (props) => (
  <div className="authFlex">
    <div className="authorWriting">
      <p className="authHeader">Authors Haven</p>
      <img width="84%" src={author} alt="" />
      <p className="authTitle">A community of like minded authors</p>
    </div>
    {props.page}
  </div>
);
