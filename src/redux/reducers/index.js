import {combineReducers} from 'redux';
import authReducer from './authReducer/authReducer';
import routineReducer from './routineReducer/routineReducer';

let rootReducer = combineReducers({
  auth: authReducer,
  routine: routineReducer,
});

export default rootReducer;
