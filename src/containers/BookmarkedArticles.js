import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userPlaceholderImage } from '../mixin';
import { Loader as Loading } from '../components/shared/Loading';
import { fetchProfile } from '../actions/profileActions';
import { getBookmarkedArticles } from '../actions/articleActions';
import BookmarkedArticleList from '../components/article/BookmarkedArticleList';

// eslint-disable-next-line react/prefer-stateless-function
class Profile extends Component {
  componentWillMount = () => {
    const {
      user: { userId },
      fetchProfile: fetchUserProfile,
      getBookmarkedArticles: fetchBookmarkedArticles,
    } = this.props;
    fetchUserProfile(userId);
    fetchBookmarkedArticles();
  }

  render() {
    const { profileStore, bookmarked } = this.props;
    const fullName = `${profileStore.user.firstname} ${profileStore.user.lastname}`;
    if (profileStore.loading && !bookmarked) return <Loading />;
    return (
      <div>
        <div className="profile-details">
          <img alt="profile" className="profile-image" src={profileStore.profile.image || userPlaceholderImage} />
          <h3 id="user-name" className="username">{fullName}</h3>
        </div>
        <h3 className="profile-title">Bookmarks</h3>
        <BookmarkedArticleList articles={bookmarked} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profileStore: state.profile,
  user: state.auth.ownProfile,
  bookmarked: state.articles.bookmarkedArticles,
});

export default connect(mapStateToProps, { fetchProfile, getBookmarkedArticles })(Profile);
