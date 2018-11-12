import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import AxiosConfig from './config/axiosConfig';

const enhancers = composeWithDevTools({});
const state = {
  auth: {
    authenticated: localStorage.getItem('token'),
    userId: Number(localStorage.getItem('userId')),
    user: JSON.parse(localStorage.getItem('user')),
    ownProfile: JSON.parse(localStorage.getItem('ownProfile')),
  },
};
const API = new AxiosConfig(state.auth.authenticated);

export default ({ children, initialState = { ...state } }) => {
  const store = createStore(
    rootReducer,
    initialState,
    enhancers(applyMiddleware(thunk.withExtraArgument(API))),
  );
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
