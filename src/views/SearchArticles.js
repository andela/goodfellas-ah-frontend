import React from 'react';
import SearchArticlesContainer from '../containers/SearchArticles';
import Header from '../components/shared/Header';

const SearchArticles = (props) => (
  <div>
    <Header {...props} />
    <SearchArticlesContainer />
  </div>
);

export default SearchArticles;
