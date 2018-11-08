import * as types from '../actions/actionTypes';
import { profile as initialState } from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.PROFILE_NAVIGATION:
      return {
        ...state,
        profileView: action.payload,
      };
    case types.SET_PROFILE: {
      const { user, ...profile } = action.payload[0].data.data;
      return {
        ...state,
        user,
        profile,
        followers: action.payload[1].data.data.followers,
        following: action.payload[2].data.data.followedUsers,
        articles: action.payload[3].data.articles,
        favorites: action.payload[4].data.articles,
      };
    }
    case types.UPDATE_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case types.SET_PROFILE_ERROR:
      return {
        ...state,
        profileError: action.payload,
      };
    case types.PROFILE_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
