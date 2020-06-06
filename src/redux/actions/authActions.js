import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOG_OUT_SUCCESS,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILED,
} from '../constants';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const signUpUser = (email, password, name) => {
  console.log(email, password, name, 'sign up action');
  return dispatch => {
    try {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          console.log(res.user.uid, 'UID ...');
          let createdAt = new Date();
          console.log('User account created & signed in!');
          database()
            .ref('users/' + res.user.uid)
            .set({
              name: name,
              email: email,
              createdAt: createdAt,
            });
          dispatch({
            type: SIGN_UP_SUCCESS,
            payload: {
              _id: res.user.uid,
            },
          });
        })
        .catch(error => {
          dispatch({
            type: SIGN_UP_FAILED,
          });
        });
    } catch (error) {
      dispatch({
        type: SIGN_UP_FAILED,
      });
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      dispatch({
        type: SIGN_UP_FAILED,
      });

      console.error(error);
      console.log(error.toString(error));
    }
  };
};

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

export const logOutUser = (email, password) => {
  console.log(email, password, 'action');
  return dispatch => {
    try {
      auth()
        .signOut()
        .then(() => {
          dispatch({
            type: LOG_OUT_SUCCESS,
          });

          console.log('User signed out!');
        });
    } catch (error) {
      console.log(error.toString(error));
    }
  };
};
