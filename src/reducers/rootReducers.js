/**
 * Dependencies.
 */
import { combineReducers } from 'redux';
import chartReducer from './chartReducer';

/**
 * The root reducer.
 * It combines all the App's reducers.
 */
const rootReducer = combineReducers({
  chart: chartReducer
})

export default rootReducer;