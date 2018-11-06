import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  dropdown = () => {
    this.refs.myDropdown.classList.toggle('show');
  };

  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg mb-4">
          <Link className="navbar-Brand" to="/">
            <h3>Authors Haven</h3>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon">
              <img className="menuIcon" src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541426069/Authors%20Haven/icons8-menu.svg" alt="" />
            </span>
          </button>

          {this.props.auth ? (
            <div className="header-user">
              <div className="header-user-search">
                <input type="search" />
                <img src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541433375/Authors%20Haven/search-icon.png" alt="" />
              </div>
              <div className="header-user-images row">
                <div className="dropdown">
                  <img
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541430760/Authors%20Haven/bell_icon.png"
                    alt=""
                  />
                </div>
                <div onClick={this.dropdown} className="dropdown">
                  <img className="dropdown-toggle" src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541426069/Authors%20Haven/john.jpg" alt="" />
                  <ul ref="myDropdown" className="dropdown-menu">
                    <li>
                      <Link to="/createArticle">New article</Link>
                    </li>
                    <li>
                      <Link to="/drafts">Drafts</Link>
                    </li>
                    <li>
                      <Link to="/myArticles">Your stories</Link>
                    </li>
                    <li>
                      <Link to="/stats">Stats</Link>
                    </li>
                    <li>
                      <Link to="/bookmark">Bookmarks</Link>
                    </li>
                    <li>
                      <Link to="/favourites">Favourites</Link>
                    </li>
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                      <Link to="/signout">Sign out</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
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
          )}
        </nav>
      </header>
    );
  }
}

function mapStatetoProps(state) {
  return { auth: state.auth.isAuthenticated };
}

export default connect(mapStatetoProps)(Header);
