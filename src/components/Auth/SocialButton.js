import React from 'react';

const SocialButton = ({ image, className }) => (
  <div className="social-link">
    <div className={className}>
      <img src={image} alt="" />
    </div>
  </div>
);

export default SocialButton;
