import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {Text, View, StyleSheet, Button} from 'react-native';
import {mainColor, mainTextColor} from './src/constants/UIConstants';
import MainNavigator from './src/screens/MainNavigator';

const styles = StyleSheet.create({
  container: {
    backgroundColor: mainColor,
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: mainTextColor,
  },
});

function HelloWorldApp() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
export default HelloWorldApp;
