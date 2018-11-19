import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './ArticleCard';
import RecentStory from '../components/article/RecentStory';
import SecondArticleCard from '../components/article/SecondArticleCard';
import { getArticles } from '../actions/articleActions';
import dice from '../assets/dice.png';
import '../styles/styles.scss';


class AllArticles extends Component {
  componentWillMount = () => {
    const { getArticles: getAllArticles } = this.props;

    getAllArticles();
  }


  render() {
    return (
      <div>
        <div className="feed">
        Stories From Your Feed
          <img src={dice} alt="" />
        </div>
        <div className="hero-lowerbody-articles">
          <Card />
        </div>
        <hr className="card-hr" />
        <div className="second-card">
          <div className="all-articles-card">
            <div className="buttons">
              <button type="button">All Articles</button>
              <button type="button">Favourites</button>
            </div>

            <SecondArticleCard />
            <SecondArticleCard />

          </div>
          <div className="recent-stories">
            <div className="recent-stories-box">
              <p className="title">Recent Stories</p>

              <RecentStory />
              <RecentStory />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.articles.error,
  articles: state.articles.articles,
});

export default connect(mapStateToProps, { getArticles })(AllArticles);
