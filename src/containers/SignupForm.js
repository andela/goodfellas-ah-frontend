import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup, clearSigninError } from '../actions/authActions';
import validateAuth from '../lib/validation';
import AuthInput from '../components/shared/AuthInput';
import Button from '../components/shared/Button';
import '../styles/styles.scss';

const initialState = {
  // input fields
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
  touched: {
    firstname: false,
    lastname: false,
    email: false,
    password: false,
    confirmPassword: false,
  },
};

const fieldNames = ['firstname', 'lastname', 'email', 'password', 'confirmPassword'];

class SignupForm extends Component {
  state = initialState;

  componentDidMount = () => {
    const { clearSigninError: clearError } = this.props;
    clearError();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { signup: signupUser, history } = this.props;
    const {
      firstname, lastname, email, password, confirmPassword,
    } = this.state;

    const fields = {
      firstname, lastname, email, password, confirmPassword,
    };

    // run validation rules for each field
    const validationError = validateAuth(fields, fieldNames);
    const changedTouchState = this.changeTouchState(fieldNames, true);
    this.setState({ touched: changedTouchState });

    const body = {
      firstname: firstname.trim(),
      lastname: lastname.trim(),
      email: email.trim(),
      password: password.trim(),
    };

    // processes user sign up when validation rules
    // pass for all fields
    if (!validationError.status) {
      signupUser(body, () => history.push('/user/profile'));
      this.setState(initialState);
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleBlur = (field) => () => {
    const { touched } = this.state;
    this.setState({
      touched: { ...touched, [field]: true },
    });
  }

  changeTouchState = (fields, state) => {
    const touchState = {};
    fields.forEach((field) => {
      touchState[field] = state;
    });
    return touchState;
  }

  render() {
    const {
      firstname, lastname, email, password, confirmPassword, touched,
    } = this.state;

    const { message } = this.props;
    const validationError = validateAuth({
      firstname, lastname, email, password, confirmPassword,
    }, fieldNames);

    return (
      <form className="auth-signup" onSubmit={this.handleSubmit}>
        <p className="error-field">{message}</p>
        <AuthInput
          error={validationError}
          value={firstname}
          touched={touched}
          handleChange={this.handleChange}
          handleBlur={this.handleBlur('firstname')}
          name="firstname"
          placeholder="First name"
        />

        <AuthInput
          error={validationError}
          value={lastname}
          touched={touched}
          handleChange={this.handleChange}
          handleBlur={this.handleBlur('lastname')}
          name="lastname"
          placeholder="Last name"
        />

        <AuthInput
          error={validationError}
          value={email}
          touched={touched}
          handleChange={this.handleChange}
          handleBlur={this.handleBlur('email')}
          name="email"
          placeholder="Email"
        />

        <AuthInput
          error={validationError}
          value={password}
          touched={touched}
          handleChange={this.handleChange}
          handleBlur={this.handleBlur('password')}
          name="password"
          type="password"
          placeholder="Password"
        />

        <AuthInput
          error={validationError}
          value={confirmPassword}
          touched={touched}
          handleChange={this.handleChange}
          handleBlur={this.handleBlur('confirmPassword')}
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
        />
        <Button title="SIGN UP" className="auth-button" type="submit" />
      </form>

    );
  }
}


const mapStateToProps = (state) => ({ message: state.auth.errorMessage });

export default connect(mapStateToProps, { signup, clearSigninError })(SignupForm);
