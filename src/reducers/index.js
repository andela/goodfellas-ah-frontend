import { combineReducers } from 'redux';
import authReducer from './authReducer';
import publishArticleReducer from './publishArticleReducer';
import imageUploadReducer from './imageUploadReducer';
import profileReducer from './profileReducer';
import articleReducer from './articleReducer';
import notificationReducer from './notificationReducer';
import updateArticleReducer from './updateArticleReducer';
import postCommentsReducers from './postCommentsReducers';
import getCommentsReducers from './getCommentsReducers';
import replyCommentsReducer from './replyCommentsReducers';

export default combineReducers({
  auth: authReducer,
  publishArticleReducer,
  imageUploadReducer,
  articles: articleReducer,
  updateArticleReducer,
  profile: profileReducer,
  notification: notificationReducer,
  postComments: postCommentsReducers,
  getComments: getCommentsReducers,
  replyComments: replyCommentsReducer,
});
