import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap';
import Card from '../components/articleCard';
import Header from '../components/shared/Header';
import '../styles/components/hero.scss';
import bookImage from '../assets/icons8-literature-48.png';
import heartImage from '../assets/icons8-heart-outline-48.png';
import authorProfileImage from '../assets/john.jpg';
import downArrow from '../assets/icons8-expand-arrow-24.png';

const Hero = () => (
  <div>
    <section className="hero-section">
      <div className="hero-section-overlay">
        <Header />
        <h2>Write it out beautifully</h2>
        <div className="hero-section-description">
          <p>
            Or type it, its just as fine. Here, we help get your articles across
          </p>
          <p>to a pool of eager readers. We know there are no limits to your</p>
          <p>imagination. We can’t wait to meet you.</p>
        </div>
        <div className="hero-section-buttons">
          <button className="btn hero-section-greenbutton" type="submit">
            CREATE ARTICLES
          </button>
          <button className="btn hero-section-whitebutton" type="submit">
            READ ARTICLES
          </button>
        </div>
      </div>
      <div className="hero-body-vector-white" />
      <div>
        <div className="big-hero-card row">
          <div className="hero-card-details col-sm-4">
            <h6>Why a willing kid</h6>
            <h6>would win an adult</h6>
            <h6>in a fist fight.</h6>
            <p>
              This is my unique story <br /> of how a savage kid from
              <br /> the west devotedly kicked
              <br /> a white glass.....
            </p>
            <div className="row hero-card-author">
              <img
                className="authorProfile"
                src={authorProfileImage}
                alt="Author Profile"
              />
              <p className="col-sm-8">John Adewale</p>
            </div>
          </div>
          <div className="hero-card-image col-sm-6" />
        </div>
      </div>
    </section>

    <section>
      <div className="hero-body">
        <div className="hero-body-details">
          <div className="hero-body-title row">
            <h2 className="col-lg-9">
              THE COMPLETE DIGITAL TOOL FOR AUTHORS WILLING TO SHARE
            </h2>
            <div className="hero-bookImage-wrapper ">
              <img src={bookImage} alt="" />
            </div>
          </div>
          <p>
            Lorem ipsum anothere olor sit amet consectetur, adipisicing elit.
            Cupiditate just tosint fugiat nesciunt doloribus veniam, dolor
            ratione sunt marecusandae, molestiae fugit reicivero labore
            quibusdam longLorem ipsum dolor sit amet cons pisici elit.
            Cupiditatesint is the fugiat nesciunt doloribus veniam, dolor
            ratione sunt reclorem usandae, molestiae fugit reiciendis vero labe
            quibusdam world odit sequi aperiam sit ipsum ipsa! odit sequi ap sit
            ipsum ipsa!
          </p>
          <hr />
          <Link className="hero-signup" to="/">
            <p>Writer? We can’t wait to meet you &rarr;</p>
          </Link>
        </div>
      </div>
      <div className="hero-body-vector-blue" />
    </section>

    <section className="hero-lowerbody">
      <div className="hero-lowerbody-details">
        <div className="hero-lowerbody-title">
          <div className="hero-bookImage-wrapper ">
            <img src={heartImage} alt="" />
          </div>
          <h2>HERE’S OUR BEST PICK FOR AUGUST</h2>
        </div>
        <p>
          We have buillt a community of talentrd authors who love to write lorem
          ips Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Cupiditate Lorem ipsum dolor sit amet consectetur, adipisicing Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Cupiditatelit.
          Cupiditate
        </p>
      </div>
      <div className="hero-lowerbody-articles">
        <div className="row">
          <div className="col-lg-3 hero-article">
            <Card />
          </div>
          <div className="col-lg-3 hero-article">
            <Card />
          </div>
          <div className="col-lg-3 hero-article">
            <Card />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 hero-article">
            <Card />
          </div>
          <div className="col-lg-3 hero-article">
            <Card />
          </div>
          <div className="col-lg-3 hero-article">
            <Card />
          </div>
        </div>
        <div className="hero-moreArticles row">
          <p>More Articles</p>
          <img src={downArrow} alt="" />
        </div>
      </div>
    </section>
  </div>
);

export default Hero;
