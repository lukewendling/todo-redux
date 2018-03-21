import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import asyncOps from './asyncOps';

export default combineReducers({
  todos,
  visibilityFilter,
  asyncOps
});
