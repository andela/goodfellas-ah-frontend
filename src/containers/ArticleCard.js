import React, { Component } from 'react';

class Card extends Component {
  state = {
    articleEnd: 6,
  };

  sortArticles = (articles) => {
    const sortedArticles = articles.map((each) => {
      const filteredArticles = this.filterLikes(each.reactions);
      return { article: each, track: filteredArticles };
    }).sort((a, b) => {
      const result = b.track - a.track;
      return result;
    });
    return sortedArticles;
  };

  displayArticles = (articleEnd) => {
    const { articles } = this.props;
    const newArticles = this.sortArticles(articles);
    const displayedArticles = newArticles.slice(0, 0 + articleEnd);
    return displayedArticles;
  };

  handleClick = () => {
    const { articleEnd } = this.state;
    this.setState({ articleEnd: articleEnd + 6 });
    this.displayCards(this.displayArticles);
  };

  filterLikes = (likes) => {
    const result = likes.filter((each) => each.reaction === 1);
    return result.length;
  };

  changeBackground = (image) => {
    const changeBackground = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, .32), rgba(0, 0, 0, .32)), url(${image}`,
      backgroundSize: 'cover',
    };
    return changeBackground;
  };

  displayCards = (displayArticles) => {
    const { articleEnd } = this.state;
    return displayArticles(articleEnd).map(
      (card) => {
        const displayedBody = card.article.body.slice(0, 120);
        const displayedTitle = card.article.title.slice(0, 30);
        return (
          <div
            onClick={this.getArticle}
            className="hero-card"
            key={card.article.id}
          >
            <div className="hero-card-details col-sm-7">
              <h6>{displayedTitle}</h6>
              <p>
                {displayedBody}
                ...
              </p>
              <div className="hero-card-author">
                {card.article.user.profile.image === null ? (
                  <img
                    src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541581893/Authors%20Haven/user-placeholder.png"
                    alt="Author Profile"
                  />
                ) : (
                  <img src={card.article.user.profile.image} alt="Author Profile" />
                )}
                <p>
                  {card.article.user.firstname} {card.article.user.lastname}
                </p>
              </div>
            </div>
            {card.article.image === null ? (
              <div className="hero-card-image col-sm-5">
                <img
                  src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541426068/Authors%20Haven/icons8-heart-outline-48-grey.png"
                  alt=""
                />
                <p>{this.filterLikes(card.article.reactions)}</p>
              </div>
            ) : (
              <div
                style={this.changeBackground(card.article.image)}
                className="hero-card-image col-sm-5"
              >
                <img
                  src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541426068/Authors%20Haven/icons8-heart-outline-48-grey.png"
                  alt=""
                />
                <p>{this.filterLikes(card.article.reactions)}</p>
              </div>
            )}
          </div>
        );
      },
    );
  }

  render() {
    return (
      <div>
        <div className="card-wrapper">{this.displayCards(this.displayArticles)}</div>
        <div onClick={this.handleClick} className="hero-moreArticles row">
          <p>More Articles</p>
          <img
            src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541426068/Authors%20Haven/icons8-expand-arrow-24.png"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Card;
