import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './ArticleCard';
import { getArticles } from '../actions/articleActions';
import dice from '../assets/dice.png';
import love from '../assets/love.png';
import comment from '../assets/comment.png';
import share from '../assets/share.png';
import dotDot from '../assets/dot-dot.png';
import articleImage from '../assets/article-image.jpg';
import author from '../assets/author.jpg';
import '../styles/styles.scss';


class AllArticles extends Component {
  componentWillMount = () => {
    const { getArticles: getAllArticles } = this.props;

      getAllArticles();
  }



  render() {
    const { articles, error } = this.props;
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

            {this.props.articles.map((article, i) => <div key={i}>{article.title}</div>)}


      {/* //       <div className="articles-card" >
      //         <div className="article-area">
      //           <p className="article-title">{article.title}</p>
      //           <p className="article-body">You’re drafting an open letter.
      //  You have to put something up on Medium.
      // You have to let people know that you’re fed up with this place.
      // You have to write stories just....
      //           </p>
      //           <hr />
      //           <div className="reactions">
      //             <div className="left-reactions">
      //               <div className="reaction">
      //                 <img src={love} alt="" />
      //                 <p>20</p>
      //               </div>
      //               <div className="reaction">
      //                 <img src={comment} alt="" />
      //                 <p>20</p>
      //               </div>
      //             </div>
      //             <div className="right-reactions">
      //               <div className="reaction">
      //                 <img src={share} alt="" />
      //               </div>
      //               <div className="reaction">
      //                 <img src={dotDot} alt="" />
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //         <div className="image-area">
      //           <div className="image-shadow">
      //             <img className="author" src={author} alt="" />
      //           </div>

      //           <img className="article-image" src={articleImage} alt="" />
      //         </div>
      //       </div> */}


          </div>
          <div className="recent-stories">
            <div className="recent-stories-box">
              <p className="title">Recent Stories</p>
              <div className="recent-story">
                <div className="author-detail">
                  <img src={author} alt="" />
                  <p className="number">8</p>
                  <p className="minutes">minutes</p>
                </div>
                <div className="recent-article">
                  <p className="article-title">WHY MY SAVAGE CAT MEOWS BEFORE THE LIGHT</p>
                  <p className="article-body">You’re drafting an open letter.
        You have to put something up on the best platform
        in Africa before the.....
                  </p>
                </div>
              </div>

              <div className="recent-story">
                <div className="author-detail">
                  <img src={author} alt="" />
                  <p className="number">8</p>
                  <p className="minutes">minutes</p>
                </div>
                <div className="recent-article">
                  <p className="article-title">WHY MY SAVAGE CAT MEOWS BEFORE THE LIGHT</p>
                  <p className="article-body">You’re drafting an open letter.
        You have to put something up on the best platform
        in Africa before the.....
                  </p>
                </div>
              </div>

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
