import * as types from '../actions/actionTypes';

const initialState = {
  authenticated: '',
  errorMessage: '',
  successMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_USER:
      return { ...state, authenticated: action.payload };
    case types.AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    case types.SUCCESS_MSG:
      return { ...state, successMessage: action.payload };
    default:
      return state;
  }
};
