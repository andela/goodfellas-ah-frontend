import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNIN_USER:
      return { ...state, authenticated: action.payload.token, userId: action.payload.userId };
    case types.SIGNIN_USER_ERROR:
      return { ...state, errorMessage: action.payload };
    case types.SIGNOUT_USER:
      return { ...state, authenticated: '', userId: null };
    default:
      return state;
  }
};
