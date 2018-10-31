import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/authActions';

class Sample extends Component {
  onSubmit = (e) => {
    const { registerUser: register } = this.props;
    e.preventDefault();
    const newUser = {
      email: e.target.email.value,
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
    };

    register(newUser);
  };

  render() {
    const { auth } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="email" name="email" />
          <input type="text" placeholder="firstname" name="firstname" />
          <input type="text" placeholder="lastname" name="lastname" />
          <input type="submit" value="submit" />
        </form>
        <div>
          <p>{auth.user.email}</p>
          <p>{auth.user.firstname}</p>
          <p>{auth.user.lastname}</p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { registerUser },
)(Sample);
