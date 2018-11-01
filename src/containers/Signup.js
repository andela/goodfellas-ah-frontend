import React, { Component } from 'react';
import { connect } from 'react-redux';
import processSignUp from '../actions/signupActions';
import '../styles/styles.scss';


class Signup extends Component {
  state = {
    // input fields
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',

    // error fields
    firstnameError: '',
    lastnameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
  };

  validateField = (field, fieldNames) => {
    const errors = {};

    errors[`${field}Error`] = '';

    // checks for empty fields
    if (!this.state[field] || this.state[field].trim() === '') {
      errors[`${field}Error`] = `${fieldNames[field]} field must be filled`;
    }

    // checks for valid email
    const emailFormat = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
    if (this.state.email !== '') {
      if (!emailFormat.test(this.state.email.trim())) {
        errors.emailError = 'You\'ve entered an invalid email';
      }
    }

    // checks if passwords match
    const alphaNumberic = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;
    if (this.state.password !== '') {
      if (this.state.password.length < 5 && !alphaNumberic.test(this.state.password.trim())) {
        errors.passwordError = 'Your password must be an alphanumberic characters greater than 4';
      }
    }

    // checks if passwords match
    if (this.state.password !== '' && this.state.confirmPassword !== '') {
      if (this.state.password !== this.state.confirmPassword) {
        errors.confirmPasswordError = 'Passwords do not match';
      }
    }

    this.setState({ ...errors });

    if (errors[`${field}Error`] !== '') {
      return false;
    }

    return true;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const fieldNames = {
      firstname: 'First Name',
      lastname: 'Last Name',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
    };

    const fields = Object.keys(fieldNames);

    const isValid = fields.map((field) => this.validateField(field, fieldNames));

    const {
      firstname, lastname, email, password,
    } = this.state;

    const body = {
      firstname, lastname, email, password,
    };

    if (isValid.includes(false) === false) {
      this.props.processSignUp(body, this.props.history);
    }
  }


  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <p>{this.props.message}</p>
          <div>
            <label htmlFor="firstName">
            First Name:
              <input
                type="text"
                value={this.state.firstname}
                onChange={this.handleChange}
                name="firstname"
                id="firstName"
                placeholder="First Name"
              />

            </label>
            <p>{this.state.firstnameError}</p>
          </div>

          <div>
            <label htmlFor="lastName">
            Last Name:
            </label>
            <input
              type="text"
              value={this.state.lastname}
              onChange={this.handleChange}
              name="lastname"
              id="lastName"
              placeholder="Last Name"
            />
            <p>{this.state.lastnameError}</p>
          </div>

          <div>
            <label htmlFor="email">E-Mail:
              <input
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
                id="email"
                placeholder="E-Mail"
              />
            </label>
            <p>{this.state.emailError}</p>
          </div>

          <div>
            <label htmlFor="password">Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
                id="password"
                placeholder="Password"
              />
            </label>
            <p>{this.state.passwordError}</p>
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password:
              <input
                type="password"
                value={this.state.confirmPassword}
                onChange={this.handleChange}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
            </label>
            <p>{this.state.confirmPasswordError}</p>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>);
  }
}


const mapStateToProps = (state) => ({ message: state.auth.errorMessage });

export default connect(mapStateToProps, { processSignUp })(Signup);
