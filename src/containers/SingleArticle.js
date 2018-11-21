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

  renderArticles() {
    if (this.props.article) {
      return <SingleArticle article={this.props.article} />;
    }
    return <div>Loading...</div>;
  }


  render() {
    return (
      <div>
        { this.renderArticles() }
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  error: state.singleArticle.articleError,
  article: state.singleArticle.singleArticle,
});

export default connect(mapStateToProps, { getAnArticle })(Article);
