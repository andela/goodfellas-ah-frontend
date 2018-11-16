import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { profileNavigation } from '../../actions/profileActions';
import { signout } from '../../actions/authActions';
import { userPlaceholderImage } from '../../mixin';
import { getNotification, seenNotification } from '../../actions/notificationActions';

export class Header extends Component {
  state = {
    notifications: {},
    unSeenNotification: 0,
    inApp: true,
  };

  dropdown = () => {
    this.refs.myDropdown.classList.toggle('show');
  };

  notificationDropdown = () => {
    this.refs.myDropdown2.classList.toggle('show');
  };

  navbarToggle = () => {
    this.refs.navbarTitle.classList.toggle('-responsive');
    if (this.refs.navbarToggler.className === 'navbar-wrapper') {
      this.refs.navbarToggler.className = 'navbar-wrapper-responsive';
    } else {
      this.refs.navbarToggler.className = 'navbar-wrapper';
    }
  };

  openSearchbar = () => {
    if (this.refs.searchbar.className === 'searchbar') {
      this.refs.searchbar.className = 'searchbar-responsive';
    } else {
      this.refs.searchbar.className = 'searchbar';
    }
  };

  handleSeen = (id) => {
    const { seenNotification: notificationSeen } = this.props;
    notificationSeen(id);
  };

  componentWillMount() {
    const { getNotification: latestNotification } = this.props;
    latestNotification();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      const { notifications, inAppStatus } = nextProps;
      const status = inAppStatus.notification;
      if (Object.values(status).indexOf('inApp') === -1) {
        this.setState({
          inApp: false,
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

  render() {
    const { auth } = this.props;
    const { parentComponent } = this.props;
    const { signout: signoutUser, profileNavigation: switchView, profile } = this.props;
    const { notifications, unSeenNotification, inApp } = this.state;
    return (
      <header>
        <nav className="navbar" ref="navbarTitle">
          {parentComponent === 'landingpage' ? (
            <Link className="navbar-title navbar-brand" to="/">
              <h3 className="header-white">Authors Haven</h3>
            </Link>
          ) : (
            <Link className="navbar-title navbar-brand" to="/">
              <h3 className="header-dark">Authors Haven</h3>
            </Link>
          )}
          {auth ? (
            <div className="header-user">
              <div className="header-user-search">
                <input className="searchbar" ref="searchbar" type="search" />
                <span onClick={this.openSearchbar}>
                  <img src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541433375/Authors%20Haven/search-icon.png" alt="" />
                </span>
              </div>
              <div className="header-user-images">
                <div className="dropdown" onClick={this.notificationDropdown}>
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
                  {
                    <ul ref="myDropdown2" className="dropdown-menu">
                      {inApp && Object.keys(notifications).length !== 0
                        && notifications.rows.map((notification) => {
                          if (!notification.seen) {
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
                        })}
                    </ul>
                  }
                </div>
                {unSeenNotification !== 0 && inApp ? <span className="notification-count">{unSeenNotification}</span> : null}

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
            <div className="navbar-main-wrapper">
              <button onClick={this.navbarToggle} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="">
                  <img className="menuIcon" src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541426069/Authors%20Haven/icons8-menu.svg" alt="" />
                </span>
              </button>
              {parentComponent === 'landingpage' ? (
                <div className="navbar-wrapper" ref="navbarToggler">
                  <ul className="navbar-element">
                    <Link className="nav-link" to="/">
                      Explore
                    </Link>
                    <Link className="nav-link" to="/">
                      About Us
                    </Link>
                    <Link className="nav-link" to="/">
                      Contact
                    </Link>
                  </ul>

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
              ) : (
                <div className="navbar-wrapper" ref="navbarToggler">
                  <ul className="navbar-element">
                    <Link className="nav-link header-dark" to="/">
                      Explore
                    </Link>
                    <Link className="nav-link header-dark" to="/">
                      About Us
                    </Link>
                    <Link className="nav-link header-dark" to="/">
                      Contact
                    </Link>
                  </ul>

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
              )}
            </div>
          )}
        </nav>
      </header>
    );
  }
}

function mapStatesToProps(state) {
  return {
    auth: state.auth.authenticated,
    profile: state.auth.ownProfile,
    notifications: state.notification.notifications,
    inAppStatus: state.notification,
  };
}

export default connect(
  mapStatesToProps,
  {
    signout, profileNavigation, getNotification, seenNotification,
  },
)(Header);
