// this is the root reducer
import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';

export default combineReducers({
  alert,
  auth
});
