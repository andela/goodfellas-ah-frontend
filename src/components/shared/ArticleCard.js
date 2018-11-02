import React from 'react';
import likesIcon from '../../assets/icons8-heart-outline-48-grey.png';
import authorProfileImage from '../../assets/john.jpg';

const Card = ({ articles }) => {
  const CardList = articles.map((eachCard) => {
    const splicedBody = eachCard.body.slice(0, 150);
    return (
      <div className="row col-lg-3 hero-card" key={eachCard.id}>
        <div className="hero-card-details col-sm-7">
          <h6>{eachCard.title}</h6>
          <p>
            {splicedBody}
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
    <div className="row card-wrapper">
      { CardList }
    </div>
  );
};

export default Card;
