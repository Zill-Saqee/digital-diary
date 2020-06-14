import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import store from '../store';
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

    try {
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
          let routine = store.getState().routine.routineData;
          routine.push({
            title,
            description,
            userId: uid,
            createdAt: firestore.FieldValue.serverTimestamp(),
          });
          dispatch({
            type: GET_ALL_ROUTINE_SUCCESS,
            payload: routine,
          });
        });
    } catch (error) {
      dispatch({
        type: ADD_ROUTINE_FAILED,
      });
      console.log('add routine error');
    }
  };
};

export const getAllRoutine = uid => {
  return async dispatch => {
    dispatch({
      type: GET_ALL_ROUTINE,
    });
    try {
      await firestore()
        .collection('routineCollection')
        .get()
        .then(function(snapshot) {
          let routineData = [];
          snapshot.forEach(doc => {
            if (doc.data().userId === uid) {
              routineData.push({
                ...doc.data(),
                id: doc.id,
              });
            }
          });
          dispatch({
            type: GET_ALL_ROUTINE_SUCCESS,
            payload: routineData,
          });
        })
        .catch(err => {
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
