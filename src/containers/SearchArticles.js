import React, { Component } from 'react';
import { connect } from 'react-redux';
import LargeLoader from '../components/shared/LargeLoader';
import Article from '../components/article/Profile';

export class SearchArticlesContainer extends Component {
  state = {
    searchResults: [],
    error: [],
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
      searchResults: [...searchResultState],
      error: searchErrorState,
    });
  }

  displaySearchResults = () => {
    const { searchResults, error } = this.state;
    const { articles } = searchResults[0];
    return (
      <div className="search-results">
        {error.length === 0
          ? (
            <div>
              <h1>Search results</h1>
              <div className="search-results-articles">
                {articles.map((article) => <Article key={article.id} article={article} author={`${article.user.firstname} ${article.user.lastname}`} authorImage={article.user.profile.image} />)}
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
    const { searchResults, error } = this.state;
    return (
      <section className="search">
        <div>
          {error.length < 1 && searchResults.length < 1
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
