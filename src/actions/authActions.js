
import axios from 'axios';
import * as types from './actionTypes';

export const loginUser = (userData) => ({
  type: types.TEST_DISPATCH,
  payload: userData,
});


export const forgotPassword = (userData, history) => async (dispatch) => {
  try {
    const response = await axios.post('api/forgotPassword', userData);
    console.log(response);
    localStorage.setItem('resetPasswordToken', response.data.token);
    history.push('/resetPassword');
  } catch (error) {
    dispatch({ type: types.AUTH_ERROR, payload: error.response.data.message });
  }
};
export const resetPassword = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('api/resetPassword', userData);
    console.log(response);
  } catch (error) {
    dispatch({ type: types.AUTH_ERROR, payload: error.response.data.message });
  }
};
