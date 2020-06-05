import React from 'react';
import {Root} from 'native-base';
import 'react-native-gesture-handler';
import {Text, View, StyleSheet, Button} from 'react-native';
import {mainColor, mainTextColor} from './src/constants/UIConstants';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import AddRoutineScreen from './src/screens/AddRoutineScreen';
import PreviousRoutine from './src/screens/PreviousRoutine';
import PreviousRoutineDetail from './src/screens/PreviousRoutineDetail';

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

const Stack = createStackNavigator();

function HelloWorldApp() {
  return (
    <Root>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'home'}}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="AllRoutine" component={PreviousRoutine} />
          <Stack.Screen name="AddRoutine" component={AddRoutineScreen} />
          <Stack.Screen
            name="PreviousRoutineDetail"
            component={PreviousRoutineDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Root>
  );
}
export default HelloWorldApp;