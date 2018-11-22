import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ARTICLES:
      return { ...state, articles: action.payload };
    case types.GET_ARTICLES_ERROR:
      return { ...state, error: action.payload };
    case types.GET_BOOKMARKED_ARTICLES:
      return { ...state, bookmarkedArticles: action.payload };
    case types.SEARCH:
      return { ...state, searchResults: action.payload };
    case types.SEARCH_ERROR:
      return { ...state, searchError: action.payload };
    default:
      return state;
  }
};
