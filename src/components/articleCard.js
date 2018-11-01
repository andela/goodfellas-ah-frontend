import React from 'react';
import cardImage from '../assets/cardImage2.png';
import authorProfileImage from '../assets/john.jpg';
import '../styles/components/articleCard.scss';

const Card = () => (
  <div className="hero-card row">
    <div className="hero-card-details col-sm-4">
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
          className="authorProfile col-sm-3"
          src={authorProfileImage}
          alt="Author Profile"
        />
        <p className="col-sm-9">John Adewale</p>
      </div>
    </div>
    <div className="col-sm-2" />
    <div className="hero-card-image col-sm-6">
      <img src={cardImage} alt="CardImage" />
    </div>
  </div>
);

export default Card;
