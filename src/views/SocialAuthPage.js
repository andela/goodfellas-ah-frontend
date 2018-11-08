import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
// import { socialLogin } from '../actions/authActions';

class SocialAuthPage extends Component {
  componentWillMount() {
    const { history } = this.props;
    const { token, userId } = queryString.parse(history.location.search);
    console.log(token, userId);
    // socialLoginUser(params.token, () => history.push('/user/profile'));
  }

  render() {
    return (
      <div>Authenticating....</div>
    );
  }
}

// export default connect(null, { socialLogin })(SocialAuthPage);
export default SocialAuthPage;
