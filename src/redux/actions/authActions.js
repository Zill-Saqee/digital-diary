import {LOGIN_SUCCESS, LOGIN_FAILED} from '../constants';
import auth from '@react-native-firebase/auth';

export const loginUser = (email, password) => {
  console.log(email, password, 'action');
  return dispatch => {
    try {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          console.log(res.user.uid);
          console.log('User signed in succesfully!');
          dispatch({
            type: LOGIN_SUCCESS,
            payload: {
              _id: res.user.uid,
            },
          });
        })
        .catch(error => {
          console.log(error);
          dispatch({
            type: LOGIN_FAILED,
          });
        });
    } catch (error) {
      console.log(error.toString(error));
    }
  };
};
