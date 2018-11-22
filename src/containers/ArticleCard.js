import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import parser from 'react-html-parser';
import { getArticles } from '../actions/articleActions';
import Loading from '../components/shared/Loading';
import { filterReactions } from '../mixin';

export class Card extends Component {
  componentDidMount() {
    const { getArticles: getAllArticles } = this.props;
    getAllArticles();
  }

  state = {
    articleLimit: 6,
  };

  sortArticlesByLikes = (articles) => {
    const sortedArticles = articles
      .map((eachArticle) => {
        const filteredArticles = filterReactions(eachArticle.reactions).likes;
        return { article: eachArticle, track: filteredArticles };
      })
      .sort((a, b) => {
        const result = b.track - a.track;
        return result;
      });
    return sortedArticles;
  };

  displayArticles = (articleLimit) => {
    const { articles } = this.props;
    const newlySortedArticles = this.sortArticlesByLikes(articles);
    const displayedArticles = newlySortedArticles.slice(0, 0 + articleLimit);
    return displayedArticles;
  };

  handleClick = (e) => {
    const { articleLimit } = this.state;
    if (articleLimit === 18) {
      e.currentTarget.innerHTML = '';
    }
    if (articleLimit !== 24) {
      this.setState({ articleLimit: articleLimit + 6 });
      this.displayCards(this.displayArticles);
    }
  };


  changeBackground = (image) => {
    const changeBackground = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, .32), rgba(0, 0, 0, .32)), url(${image}`,
      backgroundSize: 'cover',
    };
    return changeBackground;
  };

  displayCards = (displayArticles) => {
    const { articleLimit } = this.state;
    return displayArticles(articleLimit).map((card) => {
      const displayedDescription = card.article.description.slice(0, 120);
      const displayedTitle = card.article.title.slice(0, 24);
      return (
        <Link to={`/articles/${card.article.slug}`}>
          <div
            onClick={this.getArticle}
            className="hero-card"
            key={card.article.id}
          >
            <div className="hero-card-details col-sm-7">
              <h6>{parser(displayedTitle)}</h6>
              <p>
                {parser(displayedDescription)}
              </p>
              <div className="hero-card-author">
                {card.article.user.profile.image === null ? (
                  <img
                    src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541581893/Authors%20Haven/user-placeholder.png"
                    alt="Author Profile"
                  />
                ) : (
                  <img
                    src={card.article.user.profile.image}
                    alt="Author Profile"
                  />
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
                <p>{filterReactions(card.article.reactions).likes}</p>
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
                <p>{filterReactions(card.article.reactions).likes}</p>
              </div>
            )}
          </div>
        </Link>
      );
    });
  };

  render() {
    const { articles } = this.props;
    return (
      <div>
        {articles ? (
          <div className="card-wrapper">
            {this.displayCards(this.displayArticles)}
          </div>
        ) : (
          <Loading />
        )}
        <div onClick={this.handleClick} className="hero-moreArticles row">
          <p ref="moreArticles">More Articles</p>
          <img
            src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541426068/Authors%20Haven/icons8-expand-arrow-24.png"
            alt=""
          />
        </div>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return { articles: state.articles.articles.articles, error: state.articles.error.response };
}

export default connect(mapStatetoProps, { getArticles })(Card);
