import React from 'react';
import SingleArticle from '../containers/SingleArticle';
import Body from '../components/layout/DefaultLayout';


const Article = (props) => (
  <Body>
    <SingleArticle {...props} />
  </Body>
);

export default Article;
