import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/authActions';

class Sample extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      email: e.target.email.value,
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
    };
    this.props.registerUser(newUser);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="email" name="email" />
          <input type="text" placeholder="firstname" name="firstname" />
          <input type="text" placeholder="lastname" name="lastname" />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { registerUser },
)(Sample);
