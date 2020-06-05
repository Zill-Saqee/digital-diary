import React from 'react';
import {Root} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import AddRoutineScreen from './AddRoutineScreen';
import PreviousRoutine from './PreviousRoutine';
import PreviousRoutineDetail from './PreviousRoutineDetail';

const Stack = createStackNavigator();

const MainNavigator = props => {
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
};
export default MainNavigator;
