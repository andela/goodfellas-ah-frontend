import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_NOTIFICATION:
      return { ...state, notification: [...action.payload] };
    case types.LATEST_NOTIFICATION:
      return { ...state, notifications: { ...action.payload } };
    default:
      return state;
  }
};
