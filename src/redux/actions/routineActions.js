import database from '@react-native-firebase/database';
import {
  ADD_ROUTINE_SUCCESS,
  ADD_ROUTINE_FAILED,
  GET_ALL_ROUTINE,
  GET_ALL_ROUTINE_SUCCESS,
  GET_ALL_ROUTINE_FAILED,
} from '../constants';

export const addRoutine = (routine, uid) => {
  console.log(routine, 'add routine action');
  return dispatch => {
    try {
    } catch (error) {}
  };
};

export const getAllRoutine = uid => {
  return dispatch => {
    dispatch({
      type: GET_ALL_ROUTINE,
    });
    try {
      database()
        .ref('/users/' + uid)
        .once('value')
        .then(function(snapshot) {
          var routineData = snapshot.val() && snapshot.val().routine;
          console.log(routineData, 'sucess get from routine action');
          dispatch({
            type: GET_ALL_ROUTINE_SUCCESS,
            payload: routineData,
          });
        })
        .catch(err => {
          console.log(err, 'all routine get error');
          dispatch({
            type: GET_ALL_ROUTINE_FAILED,
          });
        });
    } catch (error) {
      dispatch({
        type: GET_ALL_ROUTINE_FAILED,
      });
    }
  };
};
