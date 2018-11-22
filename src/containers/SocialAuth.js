import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { socialSignin, showSignError } from '../actions/authActions';
import LargeLoader from '../components/shared/LargeLoader';

const socialAuthError = 'You can\'t login through this platform';

class SocialAuth extends Component {
  componentWillMount() {
    const {
      socialSignin: socialSigninUser,
      showSignError: showSocialSigninError,
      history,
    } = this.props;
    const { token, userId, error } = queryString.parse(history.location.search);
    if (error === 'true') {
      showSocialSigninError(socialAuthError, () => history.push('/auth/signin'));
    } else {
      socialSigninUser({ token, userId }, (response) => {
        if (response) {
          history.push('/user/profile');
        } else {
          history.push('/auth/signin');
        }
      });
    }
  }

  render() {
    return (
      <div>
        <LargeLoader />
      </div>
    );
  }
}

export default connect(null, { socialSignin, showSignError })(SocialAuth);
