import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNIN_USER:
      return {
        ...state,
        authenticated: action.payload.token,
        userId: action.payload.userId,
        errorMessage: '',
      };
    case types.SIGNIN_USER_ERROR:
      return { ...state, errorMessage: action.payload };
    case types.SUCCESS_MSG:
      return { ...state, successMessage: action.payload };
    case types.RESET_ERROR:
      return { ...state, errorMessage: action.payload };
    case types.SIGNOUT_USER:
      return { ...state, authenticated: '', userId: null };
    case types.SET_OWN_PROFILE: {
      localStorage.setItem('ownProfile', JSON.stringify(action.payload));
      return {
        ...state,
        ownProfile: action.payload,
      };
    }
    case types.SET_USER: {
      localStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};
