import React from 'react';
import parser from 'react-html-parser';
import SideButtons from '../../containers/SingleArticleSideButtons';
import DisplayTags from './DisplayTags';


const ArticleBody = (props) => {
  const { article } = props;
  const { body } = article;
  return (
    <div className="article-container">
      <SideButtons article={article} />
      <div className="article-content">
        <p>{parser(body)}</p>
      </div>
      <div className="article-tags">
        <DisplayTags articles={article} />
      </div>
    </div>
  );
};


export default ArticleBody;
