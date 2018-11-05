import React from 'react';
import { connect } from 'react-redux';
import ProfileToolbarUI from '../components/shared/ProfileToolbar';
import { switchView } from '../actions/profileActions';

const nav = {
  Following: 52,
  Followers: 45,
  Articles: 5,
  Favorites: 22,
};
const ProfileToolbar = (props) => (
  <ProfileToolbarUI handleClick={props.switchView} profile={props.profile} nav={nav} />
);
const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(
  mapStateToProps,
  { switchView },
)(ProfileToolbar);
