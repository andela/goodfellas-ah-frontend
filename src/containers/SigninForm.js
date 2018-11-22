import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin } from '../actions/authActions';
import validateAuth from '../lib/validation';
import AuthInput from '../components/shared/AuthInput';
import Button from '../components/shared/Button';
import Loading from '../components/shared/Loading';

const initialState = {
  email: '',
  password: '',
  loading: false,
  touched: {
    email: false,
    password: false,
  },
};

const fieldNames = ['email', 'password'];

class Signin extends Component {
  state = initialState;

  handleSubmit = async (event) => {
    event.preventDefault();
    const { signin: signinUser, history } = this.props;
    const { email, password } = this.state;

    const validationError = validateAuth({ email, password }, fieldNames);
    const changedTouchState = this.changeTouchState(fieldNames, true);
    this.setState({ touched: changedTouchState });

    if (!validationError.status) {
      this.setState({ loading: true });
      signinUser({ email, password }, () => history.push('/user/profile'));
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
      email,
      password,
      loading,
      touched,
    } = this.state;
    const { errorMessage } = this.props;
    const validationError = validateAuth({ email, password }, fieldNames);
    return (
      <form className="auth-signin" onSubmit={this.handleSubmit}>
        <div className="error-field">{errorMessage}</div>
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
        <div>
          <Link to="/forgotpassword"><div className="forgot-password">Forgot Password?</div></Link>
        </div>
        {loading ? <button disabled="disabled" type="submit" className="auth-button loading"><Loading /></button> : <Button title="SIGN IN" className="auth-button" type="submit" />}
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default connect(mapStateToProps, { signin })(Signin);
