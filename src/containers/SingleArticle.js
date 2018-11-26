import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAnArticle } from '../actions/articleActions';
import ArticleHeader from '../components/article/ArticleHeader';
import ArticleBody from '../components/article/ArticleBody';
import Comment from '../components/article/Comment';

export class Article extends Component {
  componentWillMount = () => {
    const { match, getAnArticle: getArticle } = this.props;
    const { slug } = match.params;

    if (slug) {
      getArticle(slug);
    }
  }

  singleArticle() {
    const { article, userId } = this.props;
    return (
      <div>
        <div className="single-page">
          <ArticleHeader article={article} userId={userId} />
          <ArticleBody article={article} userId={userId} />
          <Comment />
        </div>
      </div>

    );
  }

  renderArticle() {
    const { article, error } = this.props;
    if (article) {
      return this.singleArticle();
    }
    return <div>{error}</div>;
  }


  render() {
    return (
      <div>
        { this.renderArticle() }
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  error: state.articles.articleError,
  article: state.articles.article,
  userId: state.auth.ownProfile.userId,
});

export default connect(mapStateToProps, { getAnArticle })(Article);
