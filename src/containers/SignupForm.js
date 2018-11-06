import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signup } from '../actions/authActions';
import { validateAuth } from '../lib/validation';
import AuthInput from '../components/shared/AuthInput';
import '../styles/styles.scss';


class SignupForm extends Component {
  state = {
    // input fields
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',

    validationError: {},
  };


  handleSubmit = (event) => {
    event.preventDefault();

    const {
      firstname, lastname, email, password, confirmPassword,
    } = this.state;

    const fieldNames = [
      'firstname',
      'lastname',
      'email',
      'password',
      'confirmPassword',
    ];

    const fields = {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
    };

    // run validation rules for each field
    const validationError = validateAuth(fields, fieldNames);

    this.setState({ validationError });

    const body = {
      firstname: firstname.trim(),
      lastname: lastname.trim(),
      email: email.trim(),
      password: password.trim(),
    };

    // processes user sign up when validation rules
    // pass for all fields
    if (!validationError.status) {
      this.props.signup(body, () => this.props.history.push('/user/profile'));
    }
  }

  handleChange = (event, field) => {
    this.setState({ [field]: event.target.value });
  }


  render() {
    const {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
      validationError,
    } = this.state;

    const { message } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <p className="error-field">{message}</p>
        <AuthInput
          error={validationError}
          value={firstname}
          handleChange={this.handleChange}
          name="firstname"
          type="text"
          placeholder="Firstname"
        />

        <AuthInput
          error={validationError}
          value={lastname}
          handleChange={this.handleChange}
          name="lastname"
          type="text"
          placeholder="Lastname"
        />

        <AuthInput
          error={validationError}
          value={email}
          handleChange={this.handleChange}
          name="email"
          type="email"
          placeholder="E-mail"
        />

        <AuthInput
          error={validationError}
          value={password}
          handleChange={this.handleChange}
          name="password"
          type="password"
          placeholder="Password"
        />

        <AuthInput
          error={validationError}
          value={confirmPassword}
          handleChange={this.handleChange}
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
        />

        <div>
          <button className="auth-button" type="submit">SIGN UP</button>
        </div>

      </form>

    );
  }
}


const mapStateToProps = (state) => ({ message: state.auth.errorMessage });

export default connect(mapStateToProps, { signup })(withRouter(SignupForm));
