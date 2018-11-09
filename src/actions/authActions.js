import axios from 'axios';
import * as types from './actionTypes';

export const signup = (formValues, callback) => async (dispatch) => {
  try {
    const res = await axios.post('/api/auth/signup', formValues);
    dispatch({
      type: types.SIGNIN_USER,
      payload: res.data.token,
    });
    localStorage.setItem('token', res.data.token);
    callback();
  } catch (error) {
    dispatch({
      type: types.SIGNIN_USER_ERROR,
      payload: error.response.data.message || error.response.data.error,
    });
  }
};

export const signin = (formValues, callback) => async (dispatch) => {
  try {
    const response = await axios.post('/api/auth/signin', formValues);
    dispatch({ type: types.SIGNIN_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (error) {
    dispatch({
      type: types.SIGNIN_USER_ERROR,
      payload: error.response.data.message || error.response.data.error,
    });
  }
};

export const socialSignin = ({ token, userId }, callback) => async (dispatch) => {
  try {
    await axios.get(`/api/user/profile/${userId}`, {
      headers: { Authorization: token },
    });
    dispatch({ type: types.SIGNIN_USER, payload: token });
    localStorage.setItem('token', token);
    callback(true);
  } catch (error) {
    dispatch({
      type: types.SIGNIN_USER_ERROR,
      payload: error.response.data.message || error.response.data.error,
    });
    callback(false);
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return { type: types.SIGNOUT_USER };
};
