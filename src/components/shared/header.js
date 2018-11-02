import React from 'react';

const Header = () => (
  <header className="navbar">
    <h3>AuthorsHaven</h3>
    <nav>
      <ul className="navbar">
        <li className="nav-item nav-link">Explore</li>
        <li className="nav-item nav-link">About Us</li>
        <li className="nav-item nav-link">Contact</li>
      </ul>
    </nav>
    <nav>
      <ul className="navbar">
        <li className="nav-item nav-link">Sign In</li>|<li className="nav-item nav-link">Sign Up</li>
      </ul>
    </nav>
  </header>
);

export default Header;
