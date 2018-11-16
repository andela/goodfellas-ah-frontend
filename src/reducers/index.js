import { combineReducers } from 'redux';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import articleReducer from './articleReducer';
import notificationReducer from './notificationReducer';

export default combineReducers({
  auth: authReducer,
  articles: articleReducer,
  profile: profileReducer,
  notification: notificationReducer,
});
