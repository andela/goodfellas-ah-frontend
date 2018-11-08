import React from 'react';

const SocialButton = ({ image, className, type }) => (
  <div className="social-link">
    <a href={`http://localhost:3000/api/auth/${type}`}>
      <div className={className}>
        <img src={image} alt="" />
      </div>
    </a>
  </div>
);

export default SocialButton;
