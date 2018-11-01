import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signin } from '../actions/authActions';

class Signin extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { signin: signinUser, history } = this.props;

    signinUser(this.state, () => history.push('/user/profile'));
    this.setState({ email: '', password: '' });
  }

  render() {
    const { email, password } = this.state;
    const { errorMessage } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(event) => this.setState({ email: event.target.value })}
          />
          <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(event) => this.setState({ password: event.target.value })}
          />
          <div>{errorMessage}</div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default connect(mapStateToProps, { signin })(Signin);
