// this is the root reducer
import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import profile from './profile';

export default combineReducers({
  alert,
  auth,
  profile
});
