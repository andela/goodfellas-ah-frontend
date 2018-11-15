import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_AN_ARTICLE:
      return { ...state, singleArticle: action.payload };
    case types.GET_AN_ARTICLE_ERROR:
      return { ...state, articleError: action.payload };
    default:
      return state;
  }
};
