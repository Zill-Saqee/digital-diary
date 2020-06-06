import {
  GET_ALL_ROUTINE,
  GET_ALL_ROUTINE_SUCCESS,
  GET_ALL_ROUTINE_FAILED,
} from '../../constants';

let initState = {
  fetching: false,
  routineData: null,
};

export default function(state = initState, action) {
  console.log(action.payload);
  switch (action.type) {
    case GET_ALL_ROUTINE:
      state = {
        fetching: true,
      };
      break;
    case GET_ALL_ROUTINE_SUCCESS:
      state = {
        fetching: false,
        routineData: action.payload,
      };
      break;
    case GET_ALL_ROUTINE_FAILED:
      state = initState;
      break;
    default:
      return state;
  }
  return state;
}
