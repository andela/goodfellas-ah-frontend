import * as types from './actionTypes';

export const profileNavigation = (view) => ({
  type: types.PROFILE_NAVIGATION,
  payload: view,
});
export const profileLoading = (status = true) => ({
  type: types.PROFILE_LOADING,
  payload: status,
});

export const fetchProfile = (id) => async (dispatch, getState, { api }) => {
  const profile = api.get(`/user/profile/${id}`);
  const followers = api.get(`/user/followers/${id}`);
  const followedUsers = api.get(`/user/followed/${id}`);
  const articles = api.get(`/articles/author/${id}`);
  const favorites = api.get(`/articles/user/${id}/favorite`);
  try {
    const request = await Promise
      .all([profile, followers, followedUsers, articles, favorites]);
    dispatch({
      type: types.SET_PROFILE,
      payload: request,
    });
    dispatch(profileLoading(false));
  } catch (error) {
    dispatch({
      type: types.SET_PROFILE_ERROR,
      payload: error.response.data.message || error.response.data,
    });
    dispatch(profileLoading(false));
  }
};

export const editProfile = (id, data) => async (dispatch, getState, { api }) => {
  try {
    const response = await api.put(`/user/profile/${id}`, data);
    if (response.status === 200) {
      dispatch({
        type: types.UPDATE_PROFILE,
        payload: response.data.profile,
      });
      return { success: response.data.message };
    }
    return true;
  } catch (e) {
    return {
      error: e.response.data.message || e.response.data.error,
    };
  }
};
