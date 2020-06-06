import {
  GET_ALL_ROUTINE,
  GET_ALL_ROUTINE_SUCCESS,
  GET_ALL_ROUTINE_FAILED,
  ADD_ROUTINE,
  ADD_ROUTINE_SUCCESS,
  ADD_ROUTINE_FAILED,
} from '../../constants';

let initState = {
  // for getting routine data
  fetching: false,
  routineData: null,
  // for adding new routine
  adding: false,
  added: false,
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
    case ADD_ROUTINE:
      state = {
        ...state,
        adding: false,
        added: false,
      };
      break;
    case ADD_ROUTINE_SUCCESS:
      state = {
        ...state,
        adding: false,
        added: true,
      };
      break;
    case ADD_ROUTINE_FAILED:
      state = {
        ...state,
        adding: false,
        added: false,
      };
      break;
    default:
      return state;
  }
  return state;
}
