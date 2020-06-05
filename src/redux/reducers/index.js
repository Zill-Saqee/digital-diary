import {combineReducers} from 'redux';
import authReducer from './authReducer/authReducer';

let rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
