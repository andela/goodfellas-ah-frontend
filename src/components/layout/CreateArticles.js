import React from 'react';
import Header from '../shared/header';
import '../../styles/components/createArticles.scss';

const CreateArticles = () => (
  <div className="article">
    <Header />
    <hr />
    <div className="articles-card">
      <div className="article-buttons">
        <button className="btn article-whitebutton" type="submit">
            Publish
        </button>
        <button className="btn article-whitebutton" type="submit">
            Save for later
        </button>
      </div>
      <form>
        <input type="text" id="title" className="form" placeholder="Give me a title..." />
        <textarea name="body" id="content" placeholder="What would you like to talk about?" />
      </form>
      <div className="article-fixed-buttons">
        <button className="btn article-fixed-whitebutton" type="submit">
            Publish
        </button>
        <button className="btn article-fixed-whitebutton" type="submit">
            Save for later
        </button>
      </div>
    </div>
  </div>
);

export default CreateArticles;
