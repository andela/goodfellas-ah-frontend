import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Body from '../components/layout/Body';
import ProfileToolbar from '../containers/ProfileToolbar';
import FollowerList from '../containers/FollowerList';
import FollowingList from '../containers/FollowingList';
import ProfileArticleList from '../containers/ProfileArticleList';
import profileImage from '../assets/user.jpg';

const Profile = (props) => (
  <Body className="profile">
    <div>
      <header>
        <img alt="profile" className="profile-image" src={profileImage} />
        <h3 id="user-name">Fatima Akande</h3>
        <Link className="button outline" to="/profile/edit">Edit Profile</Link>
      </header>
      <ProfileToolbar />
      {(() => {
        switch (props.profile.profileView) {
          case 'Followers':
            return <FollowerList />;
          case 'Articles':
            return <ProfileArticleList />;
          case 'Favorites':
            return <ProfileArticleList />;
          case 'Following':
          default:
            return <FollowingList />;
        }
      })()
      }
    </div>
  </Body>
);
const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(
  mapStateToProps,
)(Profile);
