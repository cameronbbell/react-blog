import { combineReducers } from 'redux';
import comments from './comments';

const blogApp = combineReducers({
  comments
});

export default blogApp;
