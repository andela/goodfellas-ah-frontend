import React from 'react';
import SingleArticle from '../containers/SingleArticle';
import Header from '../components/shared/Header';

const Article = (props) => (
  <div>
    <Header {...props} />
    <SingleArticle {...props} />
  </div>
);

export default Article;
