import React from 'react';
import Body from '../components/layout/DefaultLayout';
import BookmarkedArticles from '../containers/BookmarkedArticles';

export default (props) => (
  <Body {...props} className="profile">
    <BookmarkedArticles />
  </Body>
);
