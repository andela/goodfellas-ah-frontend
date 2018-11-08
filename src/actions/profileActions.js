import API from '../config/axiosConfig';
import * as types from './actionTypes';

export const profileNavigation = (view) => ({
  type: types.PROFILE_NAVIGATION,
  payload: view,
});
export const profileLoading = (status = true) => ({
  type: types.PROFILE_LOADING,
  payload: status,
});

export const fetchProfile = (id) => async (dispatch) => {
  const profile = API.get(`/user/profile/${id}`);
  const followers = API.get(`/user/followers/${id}`);
  const followedUsers = API.get(`/user/followed/${id}`);
  const articles = API.get(`/articles/author/${id}`);
  const favorites = API.get(`/articles/user/${id}/favorite`);
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
      payload: 'Error fetching profile',
    });
    dispatch(profileLoading(false));
  }
};

export const editProfile = (id, data) => async (dispatch) => {
  try {
    const response = await API.put(`/user/profile/${id}`, data);
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
