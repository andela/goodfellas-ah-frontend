import React from 'react';
import { spinner } from '../../mixin';

export const Loader = () => (
  <div className="no-record centralizer">
    <div><img src={spinner} alt="loader" />&nbsp;&nbsp;
      <span>Loading</span>
    </div>
  </div>
);

const Loading = () => (
  <div className="loading-icon">
    <img src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541426069/Authors%20Haven/Spinner-1s.gif" alt="" />
  </div>
);

export default Loading;
