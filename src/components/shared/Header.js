import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { profileNavigation } from '../../actions/profileActions';
import { signout } from '../../actions/authActions';
import { search } from '../../actions/articleActions';
import Button from './Button';
import { userPlaceholderImage } from '../../mixin';

export class Header extends Component {
  state = {
    Title: false,
    Author: false,
    Tag: false,
  }

  displaySearchbar = () => {
    this.refs.searchParameters.classList.toggle('search-parameters-display');
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    e.target.value = '';
    const { search: searchArticles, history } = this.props;
    searchArticles(this.state, history.push('/articles/search'));
  }

  handleChange = (e) => {
    if (e.target.id === 'Title') {
      this.setState({
        [e.target.id]: e.target.value,
      });
    } else if (e.target.id === 'searchKeyword') {
      const { searchSelection } = this.refs;
      this.setState({
        [searchSelection.value]: e.target.value,
      });
    }
  }

  dropdown = () => {
    this.refs.myDropdown.classList.toggle('show');
  };

  navbarToggle = () => {
    this.refs.navbarTitle.classList.toggle('-responsive');
    if (this.refs.navbarToggler.className === 'navbar-wrapper') {
      this.refs.navbarToggler.className = 'navbar-wrapper-responsive';
    } else {
      this.refs.navbarToggler.className = 'navbar-wrapper';
    }
  }

  openSearchbar = () => {
    if (this.refs.searchbar.className === 'searchbar') {
      this.refs.searchbar.className = 'searchbar-responsive';
    } else {
      this.refs.searchbar.className = 'searchbar';
    }
  }

  render() {
    const { auth } = this.props;
    const { parentComponent } = this.props;
    const { signout: signoutUser, profileNavigation: switchView, profile, } = this.props;
    return (
      <header>
        <nav className="navbar" ref="navbarTitle">
          {parentComponent === 'landingpage'
            ? (
              <Link className="navbar-title navbar-brand" to="/">
                <h3 className="header-white">Authors Haven</h3>
              </Link>
            )
            : (
              <Link className="navbar-title navbar-brand" to="/">
                <h3 className="header-dark">Authors Haven</h3>
              </Link>
            )
          }
          {auth
            ? (
              <div className="header-user">
                <form onSubmit={this.handleSubmit}>
                  <div className="header-user-search">
                    <input onChange={this.handleChange} id="Title" placeholder="Search for articles" className="searchbar" ref="searchbar" type="search" />
                    <span onClick={this.displaySearchbar}>
                      <img
                        className="search-dropdown"
                        src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541772567/Authors%20Haven/arrow_grey.png"
                        alt=""
                      />
                    </span>
                    <span />
                    <span onClick={this.openSearchbar}><img
                      src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541433375/Authors%20Haven/search-icon.png"
                      alt=""
                    />
                    </span>
                    <div ref="searchParameters" className="search-parameters">
                        Filter by
                      <select ref="searchSelection">
                        <option>Title</option>
                        <option>Author</option>
                        <option>Tag</option>
                      </select>
                      <input onChange={this.handleChange} ref="searchKeyword" id="searchKeyword" type="text" placeholder="Enter keyword" />
                      <Button className="btn hero-section-greenbutton" title="Search" type="Submit" />
                    </div>
                  </div>
                </form>
                <div className="header-user-images">
                  <div className="dropdown">
                    {parentComponent === 'landingpage' ? (
                      <img
                        className="dropdown-toggle notification-image"
                        data-toggle="dropdown"
                        src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541508547/Authors%20Haven/white_bell_icon.png"
                        alt=""
                      />
                    ) : (
                      <img
                        className="dropdown-toggle notification-image"
                        data-toggle="dropdown"
                        src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541606672/Authors%20Haven/black_bell_icon.png"
                        alt=""
                      />
                    )}
                  </div>
                  <span className="notification-count">4</span>
                  <div onClick={this.dropdown} className="dropdown dropdown-click">
                    <img
                      className="dropdown-toggle author-image"
                      src={profile.image || userPlaceholderImage}
                      alt=""
                    />
                    <ul ref="myDropdown" className="dropdown-menu">
                      <Link to="/createArticle">New article</Link>
                      <Link to="/drafts">Drafts</Link>
                      <Link onClick={() => switchView('Articles')} to="/user/profile">Your stories</Link>
                      <Link to="/stats">Stats</Link>
                      <Link to="/bookmark">Bookmarks</Link>
                      <Link onClick={() => switchView('Favorites')} to="/user/profile">Favourites</Link>
                      <Link onClick={() => switchView('Following')} to="/user/profile">Profile</Link>
                      <Link className="dropdown-menu-clicked" onClick={signoutUser} to="/">Sign out</Link>
                    </ul>
                  </div>
                </div>
              </div>
            )
            : (
              <div className="navbar-main-wrapper">
                {parentComponent === 'landingpage'
                  ? (
                    <div>
                      <button
                        onClick={this.navbarToggle}
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                      >
                        <span className="">
                          <img
                            className="menuIcon"
                            src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541426069/Authors%20Haven/icons8-menu.svg"
                            alt=""
                          />
                        </span>
                      </button>
                      <div className="navbar-wrapper" ref="navbarToggler">
                        <ul className="navbar-element">
                          <Link className="nav-link" to="/">Explore</Link>
                          <Link className="nav-link" to="/">About Us</Link>
                          <Link className="nav-link" to="/">Contact</Link>
                        </ul>

                        <ul className="navbar-element">
                          <Link className="nav-item nav-link" to="/auth/signin">Sign In</Link>
                          <p className="link-border">|</p>
                          <Link className=" nav-item nav-link" to="/auth/signup">Sign Up</Link>
                        </ul>
                      </div>
                    </div>
                  )
                  : (
                    <div>
                      <button
                        onClick={this.navbarToggle}
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                      >
                        <span className="">
                          <img
                            className="menuIcon"
                            src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1542096064/Authors%20Haven/icons8-menu-black.svg"
                            alt=""
                          />
                        </span>
                      </button>
                      <div className="navbar-wrapper" ref="navbarToggler">
                        <ul className="navbar-element">
                          <Link className="nav-link header-dark" to="/">Explore</Link>
                          <Link className="nav-link header-dark" to="/">About Us</Link>
                          <Link className="nav-link header-dark" to="/">Contact</Link>
                        </ul>

                        <ul className="navbar-element">
                          <Link className="nav-item nav-link header-dark" to="/auth/signin">Sign In</Link>
                          <p className="link-border header-dark">|</p>
                          <Link className=" nav-item nav-link header-dark" to="/auth/signup">Sign Up</Link>
                        </ul>
                      </div>
                    </div>
                  )
                }
              </div>
            )
          }
        </nav>
      </header>
    );
  }
}

function mapStatesToProps(state) {
  return {
    auth: state.auth.authenticated,
    searchResults: state.articles.searchResults,
    searchError: state.articles.error,
    profile: state.auth.ownProfile,
  };
}

export default connect(mapStatesToProps, { signout, search, profileNavigation })(Header);
