import React from 'react';
import { connect } from 'react-redux';
import ProfileToolbarUI from '../components/profile/Toolbar';
import { profileNavigation } from '../actions/profileActions';

const ProfileToolbar = (props) => {
  const { profile, profileNavigation: switchView } = props;
  const {
    following, followers, articles, favorites, profileView,
  } = profile;
  const nav = {
    Following: following.length,
    Followers: followers.length,
    Articles: articles.length,
    Favorites: favorites.length,
  };
  return <ProfileToolbarUI handleClick={switchView} profileView={profileView} nav={nav} />;
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(
  mapStateToProps,
  { profileNavigation },
)(ProfileToolbar);
