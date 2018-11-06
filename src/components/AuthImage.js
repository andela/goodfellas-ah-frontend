import React from 'react';
import author from '../assets/author.jpg';

const AutnImage = () => (
  <div className="authorWriting">
    <p className="authHeader">Authors Haven</p>
    <img width="84%" src={author} alt="" />
    <p className="authTitle">A community of like minded authors</p>
  </div>
);

export default AutnImage;
