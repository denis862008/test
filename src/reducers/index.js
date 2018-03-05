import { combineReducers } from 'redux';
import todos from './Todos';
import filter from './Filter';

export default combineReducers({
    todos,
    filter
});
