import React from 'react';
import CreateArticles from '../containers/CreateArticles';
import Body from '../components/layout/DefaultLayout';

export default(props) => (
  <div>
    <Body>
      <CreateArticles {...props} />
    </Body>
  </div>
);
