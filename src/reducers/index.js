import { combineReducers } from 'redux';
import authReducer from './authReducer';
import publishArticleReducer from './publishArticleReducer';
import imageUploadReducer from './imageUploadReducer';

export default combineReducers({
  auth: authReducer,
  publishArticleReducer,
  imageUploadReducer,
});
