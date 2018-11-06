import * as types from '../actions/actionTypes';

const initialState = {
  authenticated: '',
  errorMessage: '',
  successMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_MSG:
      return { ...state, successMessage: action.payload };
    case types.RESET_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
