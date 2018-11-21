import { combineReducers } from 'redux';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import articleReducer from './articleReducer';

export default combineReducers({
  auth: authReducer,
  articles: articleReducer,
  profile: profileReducer,
});
