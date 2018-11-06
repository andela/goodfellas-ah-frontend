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

class Profile extends Component {
  componentDidMount() {
    const { fetchProfile: profileFetch } = this.props;
    profileFetch(1);
  }

  render() {
    const { profile } = this.props;
    if (profile.loading) return <Loading />;
    if (profile.profileError) return <div>{profile.profileError}</div>;
    const fullName = `${profile.user.user.firstname} ${profile.user.user.lastname}`;
    return (
      <Body className="profile">
        <div>
          <header>
            <img alt="profile" className="profile-image" src={profile.user.image || 'https://res.cloudinary.com/drmmqcxkc/image/upload/v1541506955/user-placeholder.png'} />
            <h3 id="user-name" className="username">{fullName}</h3>
            <Link className="button outline" to="/profile/edit">Edit Profile</Link>
          </header>
          <ProfileToolbar profile={profile} />
          {(() => {
            switch (profile.profileView) {
              case 'Followers':
                return <FollowerList followers={profile.followers} />;
              case 'Articles':
                return (
                  <ProfileArticleList
                    author={fullName}
                    authorImage={profile.user.image}
                    articles={profile.articles}
                  />
                );
              case 'Favorites':
                return (
                  <ProfileFavoriteList
                    author={fullName}
                    authorImage={profile.user.image}
                    articles={profile.favorites}
                  />);
              case 'Following':
              default:
                return <FollowingList following={profile.following} />;
            }
          })()
          }
        </div>
      </Body>
    );
  }
}
const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(
  mapStateToProps,
  { fetchProfile },
)(Profile);
