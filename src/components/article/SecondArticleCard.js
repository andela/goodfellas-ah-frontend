import React from 'react';
import darKlove from '../../assets/dark-love.png';
import darKcomment from '../../assets/dark-comment.png';
import share from '../../assets/share.png';
import dot from '../../assets/horizontal-dot.png';
import articleImage from '../../assets/article-image.jpg';
import author from '../../assets/author.jpg';
import '../../styles/styles.scss';


const SecondArticleCard = () => (
  <div className="articles-card">
    <div className="article-area">
      <p className="article-title">WHY MY SAVAGE CAT MEOWS SO LOUDLY ON SUNDAY NIGHTS.</p>
      <p className="article-body">You’re drafting an open letter.
        You have to put something up on Medium.
       You have to let people know that you’re fed up with this place.
       You have to write stories just....
      </p>
      <hr />
      <div className="reactions">
        <div className="left-reactions">
          <div className="reaction">
            <img src={darKlove} alt="" />
            <p>20</p>
          </div>
          <div className="reaction">
            <img src={darKcomment} alt="" />
            <p>20</p>
          </div>
        </div>
        <div className="right-reactions">
          <div className="reaction">
            <img src={share} alt="" />
          </div>
          <div className="reaction">
            <img src={dot} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="image-area">
      <div className="image-shadow">
        <img className="author" src={author} alt="" />
      </div>

      <img className="article-image" src={articleImage} alt="" />
    </div>
  </div>

);


export default SecondArticleCard;
