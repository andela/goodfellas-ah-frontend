import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Body from '../components/layout/DefaultLayout';
import Loading from '../components/shared/Loading';
import ProfileToolbar from '../containers/ProfileToolbar';
import FollowerList from '../components/profile/FollowerList';
import FollowingList from '../components/profile/FollowingList';
import ProfileArticleList from '../components/article/ArticlesByAuthor';
import ProfileFavoriteList from '../components/article/AuthorFavorites';
import { fetchProfile } from '../actions/profileActions';
import { userPlaceholderImage } from '../mixin';

class Profile extends Component {
  componentDidMount() {
    const { fetchProfile: profileFetch } = this.props;
    profileFetch(1);
  }

  render() {
    const { profileStore } = this.props;
    if (profileStore.loading) return <Loading />;
    if (profileStore.profileError) return <div>{profileStore.profileError}</div>;
    const fullName = `${profileStore.user.firstname} ${profileStore.user.lastname}`;
    return (
      <Body className="profile">
        <div>
          <header>
            <img alt="profile" className="profile-image" src={profileStore.profile.image || userPlaceholderImage} />
            <h3 id="user-name" className="username">{fullName}</h3>
            <Link className="button outline" to="/profile/edit">Edit Profile</Link>
          </header>
          <ProfileToolbar profile={profileStore} />
          {(() => {
            switch (profileStore.profileView) {
              case 'Followers':
                return <FollowerList userFullName={fullName} followers={profileStore.followers} />;
              case 'Articles':
                return (
                  <ProfileArticleList
                    author={fullName}
                    authorImage={profileStore.profile.image}
                    articles={profileStore.articles}
                    userFullName={fullName}
                  />
                );
              case 'Favorites':
                return (
                  <ProfileFavoriteList
                    author={fullName}
                    authorImage={profileStore.profile.image}
                    articles={profileStore.favorites}
                    userFullName={fullName}
                  />);
              case 'Following':
              default:
                return <FollowingList userFullName={fullName} following={profileStore.following} />;
            }
          })()
          }
        </div>
      </Body>
    );
  }
}
const mapStateToProps = (state) => ({
  profileStore: state.profile,
});

export default connect(
  mapStateToProps,
  { fetchProfile },
)(Profile);
