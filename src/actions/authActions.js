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

// eslint-disable-next-line max-len
export const signin = (formValues, callback) => async (dispatch, getState, API) => {
  try {
    const { api, openRoutes } = API;
    const response = await openRoutes.post('/auth/signin', formValues);
    const { userId } = response.data;
    const userProfile = await api.get(`/user/profile/${userId}`);
    const { user, ...profile } = userProfile.data.data;
    dispatch({ type: types.SIGNIN_USER, payload: response.data });
    dispatch({ type: types.SET_OWN_PROFILE, payload: profile });
    dispatch({ type: types.SET_USER, payload: user });
    API.updateToken(response.data.token);
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('userId', userId);

    callback();
  } catch (error) {
    dispatch({
      type: types.SIGNIN_USER_ERROR,
      payload: error.response.data.message || error.response.data.error,
    });
  }
};

export const signout = () => (dispatch, getState, API) => {
  localStorage.clear();
  API.updateToken(null);
  return dispatch({ type: types.SIGNOUT_USER });
};
