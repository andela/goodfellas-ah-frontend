import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { Loader as Loading } from '../components/shared/Loading';
import ProfileToolbar from './ProfileToolbar';
import FollowerList from '../components/profile/FollowerList';
import FollowingList from '../components/profile/FollowingList';
import ProfileArticleList from '../components/article/ArticlesByAuthor';
import ProfileFavoriteList from '../components/article/AuthorFavorites';
import { fetchProfile, follow as followAction, unFollow as unFollowAction } from '../actions/profileActions';
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

  handleClick = async () => {
    const { ownProfile, userId } = this.state;
    const { fetchProfile: profileFetch } = this.props;
    const {
      history,
      profileStore,
      follow,
      unFollow,
    } = this.props;
    let response;
    if (ownProfile) return history.push('/user/profile/edit');
    if (profileStore.user.isFollowed) {
      response = await unFollow(userId);
    } else {
      response = await follow(userId);
    }
    if (response && response.error) return swal('Error', response.error, 'error');
    profileFetch(userId);
  }

  render() {
    const { profileStore, history } = this.props;
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
      <div>
        <header>
          <img alt="profile" className="profile-image" src={profileStore.profile.image || userPlaceholderImage} />
          <h3 id="user-name" className="username">{fullName}</h3>
          <button type="button" className={`button outline ${profileStore.user.isFollowed ? 'green' : ''}`} onClick={this.handleClick}>{
            (() => {
              if (ownProfile) return 'Edit Profile';
              if (profileStore.user.isFollowed) return 'Unfollow';
              return 'Follow';
            })()}
          </button>
        </header>
        <ProfileToolbar profile={profileStore} />
        {(() => {
          switch (profileStore.profileView) {
            case 'Followers':
              return (
                <FollowerList
                  history={history}
                  userFullName={fullName}
                  ownProfile={ownProfile}
                  followers={profileStore.followers}
                />);
            case 'Articles':
              return (
                <ProfileArticleList
                  author={fullName}
                  authorImage={profileStore.profile.image}
                  articles={profileStore.articles}
                  userFullName={fullName}
                  ownProfile={ownProfile}
                />
              );
            case 'Favorites':
              return (
                <ProfileFavoriteList
                  author={fullName}
                  authorImage={profileStore.profile.image}
                  articles={profileStore.favorites}
                  userFullName={fullName}
                  ownProfile={ownProfile}
                />);
            case 'Following':
            default:
              return (
                <FollowingList
                  history={history}
                  userFullName={fullName}
                  ownProfile={ownProfile}
                  following={profileStore.following}
                />);
          }
        })()
        }
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  profileStore: state.profile,
  user: state.auth.ownProfile,
});

export default connect(
  mapStateToProps,
  { fetchProfile, follow: followAction, unFollow: unFollowAction },
)(Profile);
