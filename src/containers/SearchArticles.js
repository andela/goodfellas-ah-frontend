import React, { Component } from 'react';
import { connect } from 'react-redux';
import LargeLoader from '../components/shared/LargeLoader';
import Article from '../components/article/Profile';

class SearchArticlesContainer extends Component {
  state = {
    articleResults: [],
    errorResults: [],
  }

  componentWillReceiveProps(nextProps) {
    const searchResultState = [];
    let searchErrorState = [];
    if (!nextProps.searchError) {
      searchErrorState = [];
    } else {
      searchErrorState.push(nextProps.searchError);
    }

    searchResultState.push(nextProps.searchResults);

    this.setState({
      articleResults: [...searchResultState],
      errorResults: searchErrorState,
    });
  }

  displaySearchResults = () => {
    const { articleResults, errorResults } = this.state;
    const articlesReceived = articleResults[0].articles;
    return (
      <div className="search-results">
        {errorResults.length === 0
          ? (
            <div>
              <h1>Search results</h1>
              <div className="search-results-articles">
                {articlesReceived.map((article) => <Article key={article.id} article={article} author={`${article.user.firstname} ${article.user.lastname}`} authorImage={article.user.profile.image} />)}
              </div>
            </div>
          )
          : (
            <div>
              <h1>No articles found</h1>
            </div>
          )
        }
      </div>
    );
  }

  render() {
    const { articleResults, errorResults } = this.state;
    return (
      <section className="search">
        <div>
          {errorResults.length < 1 && articleResults.length < 1
            ? (
              <LargeLoader />
            )
            : (
              <div>
                {this.displaySearchResults()}
              </div>
            )
          }
        </div>
      </section>
    );
  }
}


function mapStatetoProps(state) {
  return {
    searchResults: state.articles.searchResults,
    searchError: state.articles.searchError,
  };
}

export default connect(mapStatetoProps)(SearchArticlesContainer);
