import API from '../config/axiosConfig';
import * as types from './actionTypes';

export const switchProfileTab = (view) => ({
  type: types.PROFILE_NAVIGATION,
  payload: view,
});
export const profileLoading = (status = true) => ({
  type: types.PROFILE_LOADING,
  payload: status,
});

export const fetchProfile = (id) => async (dispatch) => {
  const profileFetch = API.get(`/user/profile/${id}`);
  const followersFetch = API.get(`/user/followers/${id}`);
  const followedUsersFetch = API.get(`/user/followed/${id}`);
  const articlesFetch = API.get(`/articles/author/${id}`);
  const favoritesFetch = API.get(`articles/user/${id}/favorite`);
  try {
    const request = await Promise
      .all([profileFetch, followersFetch, followedUsersFetch, articlesFetch, favoritesFetch]);
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
