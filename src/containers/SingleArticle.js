import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAnArticle } from '../actions/articleActions';
import SingleArticle from '../components/SingleArticle';
import '../styles/styles.scss';


class Article extends Component {
  componentWillMount = () => {
    const { match, getAnArticle: getArticle } = this.props;
    const { slug } = match.params;

    if (slug) {
      getArticle(slug);
    }
  }

  renderArticle() {
    const { article, error } = this.props;
    if (article) {
      return <SingleArticle article={article} />;
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
  error: state.singleArticle.articleError,
  article: state.singleArticle.singleArticle,
});

export default connect(mapStateToProps, { getAnArticle })(Article);
