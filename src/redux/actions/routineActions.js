import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import {
  ADD_ROUTINE_SUCCESS,
  ADD_ROUTINE_FAILED,
  GET_ALL_ROUTINE,
  ADD_ROUTINE,
  GET_ALL_ROUTINE_SUCCESS,
  GET_ALL_ROUTINE_FAILED,
} from '../constants';

export const addRoutine = ({title, description}, uid) => {
  console.log(title, description, 'add routine action');
  return dispatch => {
    dispatch({
      type: ADD_ROUTINE,
    });
    firestore()
      .collection('routineCollection')
      .add({
        title,
        description,
        userId: uid,
        createdAt: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        console.log('New Routine added!');
        dispatch({
          type: ADD_ROUTINE_SUCCESS,
        });
      });
    try {
    } catch (error) {
      dispatch({
        type: ADD_ROUTINE_FAILED,
      });
      console.log('add routine error');
    }
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
