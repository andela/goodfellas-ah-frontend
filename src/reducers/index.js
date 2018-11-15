import { combineReducers } from 'redux';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import articleReducer from './articleReducer';
import singleArticleReducer from './singleArticleReducer';

export default combineReducers({
  singleArticle: singleArticleReducer,
  auth: authReducer,
  articles: articleReducer,
  profile: profileReducer,
});
