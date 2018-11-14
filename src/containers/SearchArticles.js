import React, { Component } from 'react';
import { connect } from 'react-redux';
import LargeLoader from '../components/shared/LargeLoader';

class SearchArticlesContainer extends Component {
  state = {
    articleResults: [],
    errorResults: [],
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    let searchErrorState = [];
    if (!nextProps.searchError) {
      searchErrorState = [];
    } else {
      searchErrorState = nextProps.searchError;
    }

    this.setState({
      articleResults: nextProps.searchResults,
      errorResults: searchErrorState,
    });
  }

  searchResultMarkup = (error, articles) => {
    console.log(articles, error);
    return (
      <div className="search-results">
        {error.length > 0
          ? (
            <h1>Error</h1>
          )
          : (
            <h1>Result</h1>
          )
        }
      </div>
    );
  }

  displaySearchResults = () => {
    const { articleResults, errorResults } = this.state;
    console.log(articleResults, errorResults);
    this.searchResultMarkup(errorResults, articleResults);
    this.setState({
      articleResults: [],
      errorResults: [],
    });
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
