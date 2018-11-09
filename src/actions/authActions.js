import * as types from './actionTypes';
import { unprotectedRoute as API } from '../config/axiosConfig';

export const signup = (formValues, callback) => async (dispatch) => {
  try {
    const res = await API.post('/auth/signup', formValues);
    dispatch({
      type: types.SIGNIN_USER,
      payload: res.data,
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
    const response = await API.post('/auth/signin', formValues);
    dispatch({ type: types.SIGNIN_USER, payload: response.data });
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('userId', response.data.id);
    callback();
  } catch (error) {
    dispatch({
      type: types.SIGNIN_USER_ERROR,
      payload: error.response.data.message || error.response.data.error,
    });
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return { type: types.SIGNOUT_USER };
};
