/**
 * Dependencies
 */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

/**
 * The Root Reducer.
 */
import rootReducer from './reducers/rootReducers';

/**
 * Redux Store.
 */
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store;