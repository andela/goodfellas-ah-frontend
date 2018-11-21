import React from 'react';
import UpdateArticle from '../containers/UpdateArticle';
import Body from '../components/layout/DefaultLayout';

export default(props) => (
  <div>
    <Body>
      <UpdateArticle {...props} />
    </Body>
  </div>
);
