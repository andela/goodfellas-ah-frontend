import React from 'react';
import parser from 'react-html-parser';
import SideButtons from './SideButtons';


const ArticleBody = (props) => {
  const { article } = props;
  const { image, body } = article;
  return (
    <div className="article-container">
      <img className="article-image" src={image} alt="" />
      <SideButtons article={article} />
      <div className="article-content">g
        <p>{parser(body)}</p>
      </div>
    </div>
  );
};


export default ArticleBody;
