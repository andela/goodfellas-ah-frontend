import { combineReducers } from 'redux';
import authReducer from './authReducer';
import publishArticleReducer from './publishArticleReducer';

export default combineReducers({
  auth: authReducer,
  publishArticleReducer,
});
