import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import API from './config/axiosConfig';


const enhancers = composeWithDevTools({});
const state = {
  auth: {
    authenticated: localStorage.getItem('token'),
    userId: Number(localStorage.getItem('userId')),
  },
};

export default ({ children, initialState = { ...state } }) => {
  // eslint-disable-next-line max-len
  const store = createStore(rootReducer, initialState, enhancers(applyMiddleware(thunk.withExtraArgument(API))));
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
