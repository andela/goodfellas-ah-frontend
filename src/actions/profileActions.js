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
  const favorites = API.get(`articles/user/${id}/favorite`);
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
  }
};
