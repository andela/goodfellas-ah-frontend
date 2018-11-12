import { combineReducers } from 'redux';
import authReducer from './authReducer';
import publishArticleReducer from './publishArticleReducer';
import imageUploadReducer from './imageUploadReducer';
import articleReducer from './articleReducer';

export default combineReducers({
  auth: authReducer,
  publishArticleReducer,
  imageUploadReducer,
  articles: articleReducer,
});
