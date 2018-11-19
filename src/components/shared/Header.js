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
    this.refs.searchbar.value = '';
    this.refs.searchKeyword.value = '';
    const { search: searchArticles, history } = this.props;

    if (this.refs.searchParameters.classList.value === 'search-parameters search-parameters-display') {
      this.displaySearchbar();
    }
    searchArticles(this.state, history.push('/articles/search'));

    this.setState({
      Title: false,
      Author: false,
      Tag: false,
    });
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
    if (this.refs.searchbar.className === 'searchbar' && this.refs.searchClick.className === 'search-click' && this.refs.searchDivider.className === 'search-divider') {
      this.refs.searchbar.className = 'searchbar-responsive';
      this.refs.searchClick.className = 'search-click-responsive';
      this.refs.searchDivider.className = 'search-divider-responsive';
    } else {
      this.refs.searchbar.className = 'searchbar';
      this.refs.searchClick.className = 'search-click';
      this.refs.searchDivider.className = 'search-divider';
    }
  }

  render() {
    const { auth } = this.props;
    const { parentComponent } = this.props;
    const { signout: signoutUser, profileNavigation: switchView, profile } = this.props;
    return (
      <div>
        {parentComponent === 'landingpage'
          ? (
            <header className="landing-page-header">
              <nav className="navbar" ref="navbarTitle">
                <Link className="navbar-title navbar-brand" to="/">
                  <h3 className="header-white">Authors Haven</h3>
                </Link>
                {auth
                  ? (
                    <div className="header-user">
                      <form onSubmit={this.handleSubmit}>
                        <div className="header-user-search">
                          <input onChange={this.handleChange} id="Title" placeholder="Search for articles" className="searchbar" ref="searchbar" type="search" />
                          <span ref="searchClick" className="search-click" onClick={this.displaySearchbar}>
                            <img
                              className="search-dropdown"
                              src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1542628198/Authors%20Haven/dropdown-arrow-white.png"
                              alt=""
                            />
                          </span>
                          <span />
                          <span className="searchbar-toggle" onClick={this.handleSubmit}><img
                            src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1542628197/Authors%20Haven/search-icon-white.svg"
                            alt=""
                          />
                          </span>
                          <span className="searchbar-toggle-mobile" onClick={this.openSearchbar}><img
                            src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1542628197/Authors%20Haven/search-icon-white.svg"
                            alt=""
                          />
                          </span>
                          <div ref="searchParameters" className="search-parameters">
                            Filter by
                            <select ref="searchSelection">
                              <option>Author</option>
                              <option>Tag</option>
                            </select>
                            <input onChange={this.handleChange} ref="searchKeyword" id="searchKeyword" type="text" placeholder="Enter keyword" />
                            <Button className="btn hero-section-greenbutton search-button" title="Search" type="Submit" />
                          </div>
                        </div>
                      </form>
                      <div className="header-user-images">
                        <div className="dropdown">
                          <img
                            className="dropdown-toggle notification-image"
                            data-toggle="dropdown"
                            src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541508547/Authors%20Haven/white_bell_icon.png"
                            alt=""
                          />
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
                            <Link id="articles-link-header-auth" onClick={() => switchView('Articles')} to="/user/profile">Your stories</Link>
                            <Link to="/stats">Stats</Link>
                            <Link to="/bookmark">Bookmarks</Link>
                            <Link className="favourites-link-header-auth" onClick={() => switchView('Favorites')} to="/user/profile">Favourites</Link>
                            <Link className="following-link-header-auth" onClick={() => switchView('Following')} to="/user/profile">Profile</Link>
                            <Link className="dropdown-menu-clicked" onClick={signoutUser} to="/">Sign out</Link>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                  : (
                    <div className="navbar-unauthorized">
                      <div className="navbar-main-wrapper">
                        <div>
                          <form onSubmit={this.handleSubmit}>
                            <div className="header-user-search-unauth">
                              <input onChange={this.handleChange} id="Title" placeholder="Search for articles" className="searchbar" ref="searchbar" type="search" />
                              <span ref="searchClick" className="search-click" onClick={this.displaySearchbar}>
                                <img
                                  className="search-dropdown"
                                  src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1542628198/Authors%20Haven/dropdown-arrow-white.png"
                                  alt=""
                                />
                              </span>
                              <span />
                              <span className="searchbar-toggle" onClick={this.handleSubmit}><img
                                src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1542628197/Authors%20Haven/search-icon-white.svg"
                                alt=""
                              />
                              </span>
                              <span className="searchbar-toggle-mobile" onClick={this.openSearchbar}><img
                                src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1542628197/Authors%20Haven/search-icon-white.svg"
                                alt=""
                              />
                              </span>
                              <div ref="searchParameters" className="search-parameters">
                                Filter by
                                <select ref="searchSelection">
                                  <option>Author</option>
                                  <option>Tag</option>
                                </select>
                                <input onChange={this.handleChange} ref="searchKeyword" id="searchKeyword" type="text" placeholder="Enter keyword" />
                                <Button className="btn hero-section-greenbutton" title="Search" type="Submit" />
                              </div>
                            </div>
                          </form>
                        </div>
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
                            <Link className="nav-item nav-link" to="/auth/signin">Sign In</Link>
                            <p className="link-border">|</p>
                            <Link className=" nav-item nav-link" to="/auth/signup">Sign Up</Link>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                }
              </nav>
            </header>
          )
          : (
            <header>
              <nav className="navbar" ref="navbarTitle">
                <Link className="navbar-title navbar-brand" to="/">
                  <h3 className="header-dark">Authors Haven</h3>
                </Link>
                {auth
                  ? (
                    <div className="header-user">
                      <form onSubmit={this.handleSubmit}>
                        <div className="header-user-search">
                          <input onChange={this.handleChange} id="Title" placeholder="Search for articles" className="searchbar searchbar-pages" ref="searchbar" type="search" />
                          <span ref="searchClick" className="search-click" onClick={this.displaySearchbar}>
                            <img
                              className="search-dropdown"
                              src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541772567/Authors%20Haven/arrow_grey.png"
                              alt=""
                            />
                          </span>
                          <span ref="searchDivider" className="search-divider" />
                          <span className="searchbar-toggle" onClick={this.handleSubmit}><img
                            src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541433375/Authors%20Haven/search-icon.png"
                            alt=""
                          />
                          </span>
                          <span className="searchbar-toggle-mobile" onClick={this.openSearchbar}><img
                            src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541433375/Authors%20Haven/search-icon.png"
                            alt=""
                          />
                          </span>
                          <div ref="searchParameters" className="search-parameters">
                            Filter by
                            <select ref="searchSelection">
                              <option>Author</option>
                              <option>Tag</option>
                            </select>
                            <input onChange={this.handleChange} ref="searchKeyword" id="searchKeyword" type="text" placeholder="Enter keyword" />
                            <Button className="btn hero-section-greenbutton search-button" title="Search" type="Submit" />
                          </div>
                        </div>
                      </form>
                      <div className="header-user-images">
                        <div className="dropdown">
                          <img
                            className="dropdown-toggle notification-image"
                            data-toggle="dropdown"
                            src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541606672/Authors%20Haven/black_bell_icon.png"
                            alt=""
                          />
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
                    <div className="navbar-unauthorized">
                      <div className="navbar-main-wrapper">
                        <div>
                          <form onSubmit={this.handleSubmit}>
                            <div className="header-user-search-unauth">
                              <input onChange={this.handleChange} id="Title" placeholder="Search for articles" className="searchbar searchbar-pages" ref="searchbar" type="search" />
                              <span ref="searchClick" className="search-click" onClick={this.displaySearchbar}>
                                <img
                                  className="search-dropdown"
                                  src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541772567/Authors%20Haven/arrow_grey.png"
                                  alt=""
                                />
                              </span>
                              <span ref="searchDivider" className="search-divider" />
                              <span className="searchbar-toggle" onClick={this.handleSubmit}><img
                                src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541433375/Authors%20Haven/search-icon.png"
                                alt=""
                              />
                              </span>
                              <span className="searchbar-toggle-mobile" onClick={this.openSearchbar}><img
                                src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541433375/Authors%20Haven/search-icon.png"
                                alt=""
                              />
                              </span>
                              <div ref="searchParameters" className="search-parameters">
                                Filter by
                                <select ref="searchSelection">
                                  <option>Author</option>
                                  <option>Tag</option>
                                </select>
                                <input onChange={this.handleChange} ref="searchKeyword" id="searchKeyword" type="text" placeholder="Enter keyword" />
                                <Button className="btn hero-section-greenbutton" title="Search" type="Submit" />
                              </div>
                            </div>
                          </form>
                        </div>
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
                            <Link className="nav-item nav-link header-dark" to="/auth/signin">Sign In</Link>
                            <p className="link-border header-dark">|</p>
                            <Link className=" nav-item nav-link header-dark" to="/auth/signup">Sign Up</Link>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                }
              </nav>
            </header>
          )
        }
      </div>
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
