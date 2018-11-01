import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/header.scss';
import menuIcon from '../../assets/icons8-menu.svg';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg mb-4">
      <Link className="navbar-Brand" to="/">
        <h3>Authors Haven</h3>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="navbar-toggler-icon">
          <img className="menuIcon" src={menuIcon} alt="" />
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/signin">
              Sign In
            </Link>
          </li>
          |
          <li className="nav-item">
            <Link className="nav-link" to="/signup">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
