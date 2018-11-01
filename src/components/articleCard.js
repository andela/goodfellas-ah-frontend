import React from 'react';
import likesIcon from '../assets/icons8-heart-outline-48-grey.png';
import authorProfileImage from '../assets/john.jpg';
import '../styles/components/articleCard.scss';

const Card = () => (
  <div className="hero-card row">
    <div className="hero-card-details col-sm-7">
      <h6>Why a willing kid</h6>
      <h6>would win an adult</h6>
      <h6>in a fist fight.</h6>
      <p>
        This is my unique story <br /> of how a savage kid from
        <br /> the west devotedly kicked
        <br /> a white glass.....
      </p>
      <div className="row hero-card-author">
        <img
          className="authorProfile"
          src={authorProfileImage}
          alt="Author Profile"
        />
        <p className="col-sm-9">John Adewale</p>
      </div>
    </div>
    <div className="hero-card-image col-sm-5">
      <img src={likesIcon} alt="" />
      <p>1300</p>
    </div>
  </div>
);

export default Card;
