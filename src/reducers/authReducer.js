import * as types from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  user: {},
};


export default (state = initialState, action) => {
  switch (action.type) {
    case types.TEST_DISPATCH:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
