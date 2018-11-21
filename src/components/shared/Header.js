import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { profileNavigation } from '../../actions/profileActions';
import { signout } from '../../actions/authActions';
import { search } from '../../actions/articleActions';
import Button from './Button';
import { userPlaceholderImage } from '../../mixin';
import { getNotification, seenNotification, setNotification } from '../../actions/notificationActions';

export class Header extends Component {
  state = {
    Title: false,
    Author: false,
    Tag: false,
    notifications: {},
    unSeenNotification: 0,
    inApp: false,
  };

  displaySearchbar = () => {
    this.refs.searchParameters.classList.toggle('search-parameters-display');
  };

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
  };

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
  };

  dropdown = () => {
    this.refs.myDropdown.classList.toggle('show');
  };

  notificationDropdown = () => {
    // this.refs.myDropdown.classList.toggle('show');
    this.refs.myDropdown2.classList.toggle('show');
  };

  handleSeen = (id) => {
    const { seenNotification: notificationSeen } = this.props;
    notificationSeen(id);
  };

  componentDidMount() {
    const { getNotification: latestNotification, setNotification: notificationSettings, profile } = this.props;
    notificationSettings(profile.userId);
    latestNotification();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      const { notifications, inAppStatus } = nextProps;
      const status = inAppStatus.notification;
      if (Object.values(status).indexOf('inApp') !== -1) {
        this.setState({
          inApp: true,
        });
      }
      this.setState({
        notifications,
      });
      if (Object.keys(notifications).length !== 0) {
        const countNotification = notifications.rows.filter((notification) => !notification.seen);
        this.setState({
          unSeenNotification: countNotification.length,
        });
      }
    }
  }

  navbarToggle = () => {
    this.refs.navbarTitle.classList.toggle('-responsive');
    if (this.refs.navbarToggler.className === 'navbar-wrapper') {
      this.refs.navbarToggler.className = 'navbar-wrapper-responsive';
    } else {
      this.refs.navbarToggler.className = 'navbar-wrapper';
    }
  };

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
  };

  render() {
    const { auth } = this.props;
    const { parentComponent } = this.props;
    const { signout: signoutUser, profileNavigation: switchView, profile } = this.props;
    const { notifications, unSeenNotification, inApp } = this.state;
    let totalNotifications = 0;
    return (
      <div>
        {parentComponent === 'landingpage' ? (
          <header className="landing-page-header">
            <nav className="navbar" ref="navbarTitle">
              <Link className="navbar-title navbar-brand" to="/">
                <h3 className="header-white">Authors Haven</h3>
              </Link>
              {auth ? (
                <div className="header-user">
                  <form onSubmit={this.handleSubmit}>
                    <div className="header-user-search">
                      <input onChange={this.handleChange} id="Title" placeholder="Search for articles" className="searchbar" ref="searchbar" type="search" />
                      <span ref="searchClick" className="search-click" onClick={this.displaySearchbar}>
                        <img className="search-dropdown" src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541772567/Authors%20Haven/arrow_grey.png" alt="" />
                      </span>
                      <span ref="searchDivider" className="search-divider" />
                      <span className="searchbar-toggle" onClick={this.handleSubmit}>
                        <img src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541433375/Authors%20Haven/search-icon.png" alt="" />
                      </span>
                      <span className="searchbar-toggle-mobile" onClick={this.openSearchbar}>
                        <img src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541433375/Authors%20Haven/search-icon.png" alt="" />
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
                    <div className="dropdown dropdown-click-notification" onClick={this.notificationDropdown}>
                      <img
                        className="dropdown-toggle notification-image"
                        data-toggle="dropdown"
                        src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541508547/Authors%20Haven/white_bell_icon.png"
                        alt=""
                      />
                      {
                        <ul ref="myDropdown2" className="dropdown-menu dropdown-menu-notification header-notification">
                          {inApp && Object.keys(notifications).length !== 0
                            ? notifications.rows.map((notification) => {
                              if (!notification.seen && totalNotifications < 5) {
                                totalNotifications += 1;
                                switch (notification.type) {
                                  case 'followerArticle':
                                    return (
                                      <Link
                                        to="/article"
                                        className="notification-icon notification-icon-click"
                                        key={notification.id}
                                        onClick={() => {
                                          this.handleSeen(notification.id);
                                        }}
                                      >
                                        {`${notification.author.firstname}published a new article`}
                                      </Link>
                                    );
                                  case 'favoriteArticleComment':
                                    return (
                                      <Link to="/article" key={notification.id}>
                                        {notification.author.firstname} commented on an your favorite article
                                      </Link>
                                    );
                                  default:
                                    break;
                                }
                              }
                            })
                            : null}
                          {inApp && unSeenNotification > 5 ? <Link to="/user/notifications" className="text-center all-notification">See More</Link> : null }
                        </ul>
                      }
                    </div>
                    {inApp && unSeenNotification !== 0 ? <span className="notification-count">{unSeenNotification}</span> : null}
                    <div onClick={this.dropdown} className="dropdown dropdown-click">
                      <img className="dropdown-toggle author-image" src={profile.image || userPlaceholderImage} alt="" />
                      <ul ref="myDropdown" className="dropdown-menu">
                        <Link to="/createArticle">New article</Link>
                        <Link to="/drafts">Drafts</Link>
                        <Link id="articles-link-header-auth" onClick={() => switchView('Articles')} to="/user/profile">
                          Your stories
                        </Link>
                        <Link to="/stats">Stats</Link>
                        <Link to="/bookmark">Bookmarks</Link>
                        <Link className="favourites-link-header-auth" onClick={() => switchView('Favorites')} to="/user/profile">
                          Favourites
                        </Link>
                        <Link className="following-link-header-auth" onClick={() => switchView('Following')} to="/user/profile">
                          Profile
                        </Link>
                        <Link className="dropdown-menu-clicked" onClick={signoutUser} to="/">
                          Sign out
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="navbar-unauthorized">
                  <div className="navbar-main-wrapper">
                    <div>
                      <form onSubmit={this.handleSubmit}>
                        <div className="header-user-search-unauth">
                          <input onChange={this.handleChange} id="Title" placeholder="Search for articles" className="searchbar" ref="searchbar" type="search" />
                          <span ref="searchClick" className="search-click" onClick={this.displaySearchbar}>
                            <img className="search-dropdown" src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541772567/Authors%20Haven/arrow_grey.png" alt="" />
                          </span>
                          <span ref="searchDivider" className="search-divider" />
                          <span className="searchbar-toggle" onClick={this.handleSubmit}>
                            <img src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541433375/Authors%20Haven/search-icon.png" alt="" />
                          </span>
                          <span className="searchbar-toggle-mobile" onClick={this.openSearchbar}>
                            <img src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541433375/Authors%20Haven/search-icon.png" alt="" />
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
                    <button onClick={this.navbarToggle} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                      <span className="">
                        <img className="menuIcon" src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541426069/Authors%20Haven/icons8-menu.svg" alt="" />
                      </span>
                    </button>
                    <div className="navbar-wrapper" ref="navbarToggler">
                      <ul className="navbar-element">
                        <Link className="nav-item nav-link" to="/auth/signin">
                          Sign In
                        </Link>
                        <p className="link-border">|</p>
                        <Link className=" nav-item nav-link" to="/auth/signup">
                          Sign Up
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </nav>
          </header>
        ) : (
          <header>
            <nav className="navbar" ref="navbarTitle">
              <Link className="navbar-title navbar-brand" to="/">
                <h3 className="header-dark">Authors Haven</h3>
              </Link>
              {auth ? (
                <div className="header-user">
                  <form onSubmit={this.handleSubmit}>
                    <div className="header-user-search">
                      <input onChange={this.handleChange} id="Title" placeholder="Search for articles" className="searchbar" ref="searchbar" type="search" />
                      <span ref="searchClick" className="search-click" onClick={this.displaySearchbar}>
                        <img className="search-dropdown" src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541772567/Authors%20Haven/arrow_grey.png" alt="" />
                      </span>
                      <span ref="searchDivider" className="search-divider" />
                      <span className="searchbar-toggle" onClick={this.handleSubmit}>
                        <img src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541433375/Authors%20Haven/search-icon.png" alt="" />
                      </span>
                      <span className="searchbar-toggle-mobile" onClick={this.openSearchbar}>
                        <img src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541433375/Authors%20Haven/search-icon.png" alt="" />
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
                    <div className="dropdown dropdown-click-notification" onClick={this.notificationDropdown}>
                      <img
                        className="dropdown-toggle notification-image"
                        data-toggle="dropdown"
                        src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541606672/Authors%20Haven/black_bell_icon.png"
                        alt=""
                      />
                      {
                        <ul ref="myDropdown2" className="dropdown-menu header-notification">
                          {inApp && Object.keys(notifications).length !== 0
                            ? notifications.rows.map((notification) => {
                              if (!notification.seen && totalNotifications < 5) {
                                totalNotifications += 1;
                                switch (notification.type) {
                                  case 'followerArticle':
                                    return (
                                      <Link
                                        to="/article"
                                        key={notification.id}
                                        onClick={() => {
                                          this.handleSeen(notification.id);
                                        }}
                                        className="notification-icon"
                                      >
                                        {notification.author.firstname} published a new article
                                      </Link>
                                    );
                                  case 'favoriteArticleComment':
                                    return (
                                      <Link to="/article" key={notification.id}>
                                        {notification.author.firstname} commented on an article
                                      </Link>
                                    );
                                  default:
                                    break;
                                }
                              }
                            })
                            : null}
                          {inApp && unSeenNotification > 5 ? <Link to="/user/notifications" className="text-center all-notification">See More</Link> : null }
                        </ul>
                      }
                    </div>
                    {inApp && unSeenNotification !== 0 ? <span className="notification-count">{unSeenNotification}</span> : null}
                    <div onClick={this.dropdown} className="dropdown dropdown-click">
                      <img className="dropdown-toggle author-image" src={profile.image || userPlaceholderImage} alt="" />
                      <ul ref="myDropdown" className="dropdown-menu">
                        <Link to="/createArticle">New article</Link>
                        <Link to="/drafts">Drafts</Link>
                        <Link onClick={() => switchView('Articles')} to="/user/profile">
                          Your stories
                        </Link>
                        <Link to="/stats">Stats</Link>
                        <Link to="/bookmark">Bookmarks</Link>
                        <Link onClick={() => switchView('Favorites')} to="/user/profile">
                          Favourites
                        </Link>
                        <Link onClick={() => switchView('Following')} to="/user/profile">
                          Profile
                        </Link>
                        <Link className="dropdown-menu-clicked" onClick={signoutUser} to="/">
                          Sign out
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="navbar-unauthorized">
                  <div className="navbar-main-wrapper">
                    <div>
                      <form onSubmit={this.handleSubmit}>
                        <div className="header-user-search-unauth">
                          <input onChange={this.handleChange} id="Title" placeholder="Search for articles" className="searchbar" ref="searchbar" type="search" />
                          <span ref="searchClick" className="search-click" onClick={this.displaySearchbar}>
                            <img className="search-dropdown" src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541772567/Authors%20Haven/arrow_grey.png" alt="" />
                          </span>
                          <span ref="searchDivider" className="search-divider" />
                          <span className="searchbar-toggle" onClick={this.handleSubmit}>
                            <img src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541433375/Authors%20Haven/search-icon.png" alt="" />
                          </span>
                          <span className="searchbar-toggle-mobile" onClick={this.openSearchbar}>
                            <img src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541433375/Authors%20Haven/search-icon.png" alt="" />
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
                    <button onClick={this.navbarToggle} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                      <span className="">
                        <img className="menuIcon" src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1542096064/Authors%20Haven/icons8-menu-black.svg" alt="" />
                      </span>
                    </button>
                    <div className="navbar-wrapper" ref="navbarToggler">
                      <ul className="navbar-element">
                        <Link className="nav-item nav-link header-dark" to="/auth/signin">
                          Sign In
                        </Link>
                        <p className="link-border header-dark">|</p>
                        <Link className=" nav-item nav-link header-dark" to="/auth/signup">
                          Sign Up
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </nav>
          </header>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth.authenticated,
  searchResults: state.articles.searchResults,
  searchError: state.articles.error,
  profile: state.auth.ownProfile,
  notifications: state.notification.notifications,
  inAppStatus: state.notification,
});

export default connect(
  mapStateToProps,
  {
    signout,
    search,
    profileNavigation,
    getNotification,
    seenNotification,
    setNotification,
  },
)(Header);
