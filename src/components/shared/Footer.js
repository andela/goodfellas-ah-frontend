import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <Link className="col-lg-3" to="/">
        <p>About</p>
      </Link>

      <Link className="col-lg-3" to="/">
        <p>Contact</p>
      </Link>

      <Link className="col-lg-3" to="/">
        <p>Terms</p>
      </Link>

      <Link className="col-lg-3" to="/">
        <p>Privacy</p>
      </Link>
    </div>
  </footer>
);

export default Footer;
