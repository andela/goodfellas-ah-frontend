import React from 'react';
import AllArticles from '../containers/AllArticles';
import Body from '../components/layout/DefaultLayout';

const GetAllArticles = (props) => (
  <Body>
    <AllArticles {...props} />
  </Body>
);

export default GetAllArticles;
