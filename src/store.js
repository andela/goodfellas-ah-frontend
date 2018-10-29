import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

<<<<<<< HEAD
const initialState = {};
const enhancers = composeWithDevTools({});
const store = createStore(rootReducer, initialState, enhancers(applyMiddleware(thunk)));
=======
const middleware = [thunk];
const initialState = {};
const enhancers = composeWithDevTools({});
const store = createStore(rootReducer, initialState, enhancers(applyMiddleware(...middleware)));
>>>>>>> create store

export default store;
