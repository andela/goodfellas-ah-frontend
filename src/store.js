import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const enhancers = composeWithDevTools({});
const store = createStore(rootReducer, initialState, enhancers(applyMiddleware(thunk)));

export default store;
