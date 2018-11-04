import React from 'react';
import likesIcon from '../assets/icons8-heart-outline-48-grey.png';
import authorProfileImage from '../assets/john.jpg';
import downArrow from '../assets/icons8-expand-arrow-24.png';

const Card = ({ articles }) => {
  const displayArticles = () => {
    const display = articles.splice(0, 6);
    return display;
  };

  const CardList = displayArticles().map((eachCard) => {
    const slicedBody = eachCard.body.slice(0, 150);
    return (
      <div className="row col-lg-3 hero-card" key={eachCard.id}>
        <div className="hero-card-details col-sm-7">
          <h6>{eachCard.title}</h6>
          <p>
            {slicedBody}...
          </p>
          <div className="row hero-card-author">
            <img
              className="authorProfile"
              src={authorProfileImage}
              alt="Author Profile"
            />
            <p className="col-lg-9">{eachCard.user.firstname} {eachCard.user.lastname}</p>
          </div>
        </div>
        <div className="hero-card-image col-sm-5">
          <img src={likesIcon} alt="" />
          <p>1300</p>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="row card-wrapper">
        { CardList }
      </div>
      <div className="hero-moreArticles row">
        <p>More Articles</p>
        <img src={downArrow} alt="" />
      </div>
    </div>
  );
};

export default Card;
