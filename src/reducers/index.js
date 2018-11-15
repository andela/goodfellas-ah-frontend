import { combineReducers } from 'redux';
import authReducer from './authReducer';
import publishArticleReducer from './publishArticleReducer';
import imageUploadReducer from './imageUploadReducer';
import profileReducer from './profileReducer';
import articleReducer from './articleReducer';
import updateArticleReducer from './updateArticleReducer';

export default combineReducers({
  auth: authReducer,
  publishArticleReducer,
  imageUploadReducer,
  articles: articleReducer,
  updateArticleReducer,
  profile: profileReducer,
});
