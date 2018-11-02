
import axios from 'axios';
import queryString from 'query-string';
import * as types from './actionTypes';


export const forgotPassword = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('api/forgotPassword', userData);
    dispatch({ type: types.SUCCESS_MSG, payload: response.data.message });
  } catch (error) {
    dispatch({ type: types.AUTH_ERROR, payload: error.response.data.message });
  }
};
export const resetPassword = (userData, history) => async (dispatch) => {
  try {
    const { token } = queryString.parse(history.location.search);
    const response = await axios.post(`api/resetPassword?token=${token.trim()}`, userData);
    dispatch({ type: types.SUCCESS_MSG, payload: response.data.message });
    history.push('/signin');
  } catch (error) {
    dispatch({ type: types.AUTH_ERROR, payload: error.response.data.message });
  }
};
