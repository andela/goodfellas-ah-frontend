import React from 'react';
import { Link } from 'react-router-dom';

const LandingPageBody = () => (
  <section className="hero-body-background">
    <div className="hero-body">
      <div className="hero-body-details">
        <div className="hero-body-title row">
          <h2 className="col-lg-9">
            THE COMPLETE DIGITAL TOOL FOR AUTHORS WILLING TO SHARE
          </h2>
          <div className="hero-bookImage-wrapper ">
            <img
              src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541426068/Authors%20Haven/icons8-literature-48.png"
              alt=""
            />
          </div>
        </div>
        <p>
          Authors Haven taps into a community of like-minded authors to
          foster inspiration in you. Enabling the world’s most insightful
          writers, thinkers, and storytellers to bring you the smartest takes on
          topics that matter. So whatever your interest, you can always find
          fresh thinking and unique perspectives here.
        </p>
        <hr />
        <Link className="hero-signup" to="/auth/signup">
          <p>Writer? We can’t wait to meet you &rarr;</p>
        </Link>
      </div>
    </div>
    <div className="hero-body-vector-blue" />
  </section>
);

export default LandingPageBody;
