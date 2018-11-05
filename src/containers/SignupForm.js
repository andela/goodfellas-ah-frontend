import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { signup } from '../actions/authActions';
import facebook from '../assets/facebook-image.png';
import google from '../assets/google-image.png';
import twitter from '../assets/twitter-image.png';
import '../styles/styles.scss';


class SignupForm extends Component {
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
      firstname: 'Firstname',
      lastname: 'Lastname',
      email: 'E-mail',
      password: 'Password',
      confirmPassword: 'Confirm Password',
    };

    const fields = Object.keys(fieldNames);

    // run validation rules for each field
    const isValid = fields.map((field) => this.validateField(field, fieldNames));

    const {
      firstname, lastname, email, password,
    } = this.state;

    const body = {
      firstname: firstname.trim(),
      lastname: lastname.trim(),
      email: email.trim(),
      password: password.trim(),
    };

    // processes user sign up when validation rules
    // pass for all fields
    if (isValid.includes(false) === false) {
      this.props.signup(body, () => this.props.history.push('/user/profile'));
    }
  }


  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }


  render() {
    return (
      <div className="signupForm">
        <form onSubmit={this.handleSubmit}>
          <div className="signup-buttons">
            <Link className="both-links" to="/Signup">
              <input type="button" className="buttons" id="sign-up" value="SIGN UP" />
            </Link>
            <Link className="both-links" to="/Signin">
              <input type="button" className="buttons" id="sign-in" value="SIGN IN" />
            </Link>
          </div>

          <p className="errorField">{this.props.message}</p>
          <div className="signupFieldDiv">
            <input
              type="text"
              className="signupField"
              value={this.state.firstname}
              onChange={this.handleChange}
              name="firstname"
              id="firstName"
              placeholder="Firstname"
            />
            <p className="errorField">{this.state.firstnameError}</p>
          </div>

          <div>
            <input
              type="text"
              className="signupField"
              value={this.state.lastname}
              onChange={this.handleChange}
              name="lastname"
              id="lastName"
              placeholder="Lastname"
            />
            <p className="errorField">{this.state.lastnameError}</p>
          </div>

          <div>
            <input
              type="email"
              className="signupField"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
              id="email"
              placeholder="E-mail"
            />
            <p className="errorField">{this.state.emailError}</p>
          </div>

          <div>
            <input
              type="password"
              className="signupField"
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
              id="password"
              placeholder="Password"
            />
            <p className="errorField">{this.state.passwordError}</p>
          </div>

          <div>
            <input
              type="password"
              className="signupField"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
            <p className="errorField">{this.state.confirmPasswordError}</p>
          </div>
          <div>
            <button className="signupButton" type="submit">SIGN UP</button>
          </div>

          <div className="or">Or</div>

          <div className="social-icons">
            <Link className="social-link" to="#">
              <div className="facebook">
                <img src={facebook} alt="" />
              </div>
            </Link>

            <Link className="social-link" to="#">
              <div className="google"><img src={google} alt="" /></div>
            </Link>

            <Link className="social-link" to="#"> <div className="twitter">
              <img src={twitter} alt="" />
            </div>
            </Link>
          </div>

        </form>
      </div>);
  }
}


const mapStateToProps = (state) => ({ message: state.auth.errorMessage });

export default connect(mapStateToProps, { signup })(withRouter(SignupForm));
