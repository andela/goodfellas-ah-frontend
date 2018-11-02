import React from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '../../assets/icons8-menu.svg';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg mb-4">
      <Link className="navbar-Brand" to="/">
        <h3>Authors Haven</h3>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span className="navbar-toggler-icon">
          <img className="menuIcon" src={menuIcon} alt="" />
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto nav-center">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <p>Explore</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <p>About Us</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <p>Contact</p>
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/signin">
              <p>Sign In</p>
            </Link>
          </li>
          <p className="link-border">|</p>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">
              <p>Sign Up</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
