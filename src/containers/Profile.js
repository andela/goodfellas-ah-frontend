import React, { Component } from 'react';
import { connect } from 'react-redux';
import Body from '../components/layout/DefaultLayout';
import { Loader as Loading } from '../components/shared/Loading';
import ProfileToolbar from './ProfileToolbar';
import FollowerList from '../components/profile/FollowerList';
import FollowingList from '../components/profile/FollowingList';
import ProfileArticleList from '../components/article/ArticlesByAuthor';
import ProfileFavoriteList from '../components/article/AuthorFavorites';
import { fetchProfile } from '../actions/profileActions';
import { userPlaceholderImage } from '../mixin';
import icons from '../assets/icons.svg';

export class Profile extends Component {
  state = {
    ownProfile: false,
    userId: null,
  }

  updateUserId = () => {
    const { user, match } = this.props;
    const { userId: loggedInUserId } = user;
    const paramUserId = Number(match.params.userId);
    if (!paramUserId || paramUserId === loggedInUserId) {
      this.setState({ ownProfile: true, userId: loggedInUserId });
    } else {
      this.setState({ ownProfile: false, userId: paramUserId });
    }
  }

  componentDidMount = () => {
    this.updateUserId();
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { fetchProfile: profileFetch, match } = this.props;
    const { userId } = this.state;
    if (prevState.userId !== userId) profileFetch(userId);
    if (prevProps.match.params.userId !== match.params.userId) this.updateUserId();
  }

  handleClick = () => {
    const { ownProfile } = this.state;
    const { history } = this.props;
    if (ownProfile) history.push('/user/profile/edit');
  }

  render() {
    const { profileStore } = this.props;
    const { ownProfile } = this.state;
    if (profileStore.loading) return <Loading />;
    if (profileStore.profileError) {
      return (
        <div className="no-record centralizer">
          <div>
            <svg className="icon">
              <use xlinkHref={`${icons}#sad`} />
            </svg>&nbsp;&nbsp;
            <span>{profileStore.profileError}</span>
          </div>
        </div>);
    }
    const fullName = `${profileStore.user.firstname} ${profileStore.user.lastname}`;
    return (
      <Body className="profile">
        <div>
          <header>
            <img alt="profile" className="profile-image" src={profileStore.profile.image || userPlaceholderImage} />
            <h3 id="user-name" className="username">{fullName}</h3>
            <button type="button" className="button outline" onClick={this.handleClick}>{ ownProfile ? 'Edit Profile' : 'Follow'}</button>
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
  user: state.auth,
});

export default connect(
  mapStateToProps,
  { fetchProfile },
)(Profile);
