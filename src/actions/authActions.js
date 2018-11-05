import axios from 'axios';
import * as types from './actionTypes';

export const signin = (formValues, callback) => async (dispatch) => {
  try {
    const response = await axios.post('/api/auth/signin', formValues);

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
