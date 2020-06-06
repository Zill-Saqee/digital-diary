import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOG_OUT_SUCCESS,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILED,
} from '../../constants';

let initState = {
  status: false,
  uid: null,
};

export default function(state = initState, action) {
  console.log(action.payload);
  switch (action.type) {
    case LOGIN:
      // TODO LOGIN
      break;

    case LOGIN_SUCCESS:
      state = {
        status: true,
        uid: action.payload._id,
      };
      break;
    case LOGIN_FAILED:
      state = {
        status: false,
        uid: null,
      };
      break;
    case SIGN_UP_SUCCESS:
      state = {
        status: true,
        uid: action.payload._id,
      };
      break;
    case SIGN_UP_FAILED:
      state = {
        status: false,
      };
      break;
    case LOG_OUT_SUCCESS:
      state = initState;
      break;
    default:
      return state;
  }
  return state;
}
