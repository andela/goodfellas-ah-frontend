import React from 'react';
import { connect } from 'react-redux';
import ProfileToolbarUI from '../components/shared/ProfileToolbar';
import { switchProfileTab } from '../actions/profileActions';

const ProfileToolbar = (props) => {
  const { profile, switchProfileTab: switchView } = props;
  const {
    following, followers, articles, favorites,
  } = profile;
  const nav = {
    Following: following.length,
    Followers: followers.length,
    Articles: articles.length,
    Favorites: favorites.length,
  };
  return <ProfileToolbarUI handleClick={switchView} profile={profile} nav={nav} />;
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(
  mapStateToProps,
  { switchProfileTab },
)(ProfileToolbar);
