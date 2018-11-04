// this is an example action file

import * as types from './actionTypes';

export const registerUser = (userData) => ({
  type: types.TEST_DISPATCH,
  payload: userData,
});

export const loginUser = (userData) => ({
  type: types.TEST_DISPATCH,
  payload: userData,
});

export const getArticles = (articles) => ({
  type: types.ARTICLES_DISPATCH,
  payload: articles,
});
