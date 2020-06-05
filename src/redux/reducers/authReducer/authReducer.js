import {LOGIN, LOGIN_SUCCESS, LOGIN_FAILED} from '../../constants';

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
        status: 'error',
      };
      break;
    default:
      return state;
  }
  return state;
}
