import React from 'react';
import author from '../../assets/author.jpg';

const AuthImage = () => (
  <div className="author-writing">
    <p className="auth-header">Authors Haven</p>
    <img width="84%" src={author} alt="" />
    <p className="auth-title">A community of like minded authors</p>
  </div>
);

export default AuthImage;
