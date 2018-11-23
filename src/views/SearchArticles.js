import React from 'react';
import Header from '../components/shared/Header';
import SearchArticlesContainer from '../containers/SearchArticles';

const SearchArticles = (props) => (
  <div>
    <Header {...props} />
    <SearchArticlesContainer />
  </div>
);

export default SearchArticles;
