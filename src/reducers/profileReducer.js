import * as types from '../actions/actionTypes';

const initialState = {
  profileView: 'Following',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTQxNDA3NzcxLCJleHAiOjE1NDE0OTQxNzF9.DHaysbXDOqw8iWXw_JKE8-9H-s2AXS_dqAz1NzO-rpg',
  userId: 3,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case types.PROFILE_NAVIGATION:
      return {
        ...state,
        profileView: action.payload,
      };
    default:
      return state;
  }
};
