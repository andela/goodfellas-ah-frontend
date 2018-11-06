import * as types from '../actions/actionTypes';

const initialState = {
  loading: true,
  profileView: 'Following',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTQxNDA3NzcxLCJleHAiOjE1NDE0OTQxNzF9.DHaysbXDOqw8iWXw_JKE8-9H-s2AXS_dqAz1NzO-rpg',
  profileError: '',
  userId: 1,
  user: {},
  followers: [],
  following: [],
  articles: [],
  favorites: [],
};


export default (state = initialState, action) => {
  switch (action.type) {
    case types.PROFILE_NAVIGATION:
      return {
        ...state,
        profileView: action.payload,
      };
    case types.SET_PROFILE:
      return {
        ...state,
        user: action.payload[0].data.data,
        followers: action.payload[1].data.data.followers,
        following: action.payload[2].data.data.followedUsers,
        articles: action.payload[3].data.articles,
        favorites: action.payload[4].data.articles,
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
