import * as types from './actionTypes';

export const signup = (formValues, callback) => async (dispatch, getState, { openRoutes }) => {
  try {
    const res = await openRoutes.post('/auth/signup', formValues);
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

export const signin = (formValues, callback) => async (dispatch, getState, { openRoutes }) => {
  try {
    const response = await openRoutes.post('/auth/signin', formValues);
    dispatch({ type: types.SIGNIN_USER, payload: response.data });
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('userId', response.data.userId);
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
  localStorage.removeItem('userId');

  return { type: types.SIGNOUT_USER };
};
