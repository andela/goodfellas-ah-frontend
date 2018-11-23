import React from 'react';
import parser from 'react-html-parser';
import SideButtons from './SideButtons';


const ArticleBody = (props) => {
  const { article, userId } = props;
  const { body } = article;
  return (
    <div className="article-container">
      <SideButtons article={article} userId={userId} />
      <div className="article-content">
        {parser(body)}
      </div>
    </div>
  );
};


export default ArticleBody;
