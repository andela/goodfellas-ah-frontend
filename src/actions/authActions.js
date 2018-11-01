import axios from 'axios';
import * as types from './actionTypes';

export const signin = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3200/api/auth/signin', formProps);

    dispatch({ type: types.AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (error) {
    dispatch({ type: types.AUTH_ERROR, payload: error.response.data.message });
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: types.AUTH_USER,
    payload: '',
  };
};
