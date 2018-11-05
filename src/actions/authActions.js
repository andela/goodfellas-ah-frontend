import axios from 'axios';
import * as types from './actionTypes';


const URL = 'http://localhost:8000';


export const signup = (body, callback) => async (dispatch) => {
  try {
    const res = await axios.post(`${URL}/api/auth/signup`, body);
    dispatch({
      type: types.AUTH_USER,
      payload: res.data.token,
    });
    localStorage.setItem('token', res.data.token);
    callback();
  } catch (error) {
    dispatch({
      type: types.AUTH_ERROR,
      payload: error.response.data.message || error.response.data.error,
    });
  }
};
