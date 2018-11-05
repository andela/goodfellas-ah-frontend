import * as types from './actionTypes';

export const switchView = (view) => ({
  type: types.PROFILE_NAVIGATION,
  payload: view,
});

export const test = (userData) => ({
  type: types.TEST_DISPATCH,
  payload: userData,
});
