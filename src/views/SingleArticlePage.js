import React from 'react';
import SingleArticle from '../containers/SingleArticle';
import Body from '../components/layout/DefaultLayout';

const Article = (props) => (
  <Body {...props}>
    <SingleArticle {...props} />
  </Body>
);

export default Article;
