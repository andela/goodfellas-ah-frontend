import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.checkAuthStatus();
    }

    componentDidUpdate() {
      this.checkAuthStatus();
    }

    checkAuthStatus() {
      const { auth, history } = this.props;
      if (!auth) {
        history.push('/auth');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth.authenticated };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
