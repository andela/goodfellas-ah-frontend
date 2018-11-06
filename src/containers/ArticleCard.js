import React, { Component } from 'react';

class Card extends Component {
  state = {
    currentArticle: 0,
  };

  handleClick = () => {
    this.setState({ currentArticle: this.state.currentArticle + 6 });
    console.log(this.state.currentArticle);
    this.displayArticles(this.state.currentArticle);
  }

  displayArticles = (start) => {
    const displayedArticles = this.props.articles.slice(start, start + 6);
    return displayedArticles;
  }

  getArticle = () => {
    console.log('Just hold on, We\'re going home');
  }

  CardList = this.displayArticles(this.state.currentArticle).map((card) => {
    const displayedBody = card.body.slice(0, 120);
    const displayedTitle = card.title.slice(0, 30);
    return (
      <div onClick={this.getArticle} className="hero-card" key={card.id}>
        <div className="hero-card-details col-sm-7">
          <h6>{displayedTitle}</h6>
          <p>
            {displayedBody}
            ...
          </p>
          <div className="hero-card-author">
            <img
              src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541426069/Authors%20Haven/john.jpg"
              alt="Author Profile"
            />
            <p>
              {card.user.firstname} {card.user.lastname}
            </p>
          </div>
        </div>
        <div className="hero-card-image col-sm-5">
          <img src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541426068/Authors%20Haven/icons8-heart-outline-48-grey.png" alt="" />
          <p>1300</p>
        </div>
      </div>
    );
  });

  render() {
    return (
      <div>
        <div className="card-wrapper">{this.CardList}</div>
        <div onClick={this.handleClick} className="hero-moreArticles row">
          <p>More Articles</p>
          <img src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541426068/Authors%20Haven/icons8-expand-arrow-24.png" alt="" />
        </div>
      </div>
    );
  }
}

export default Card;
