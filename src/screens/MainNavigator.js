// import React from 'react';
// import {useSelector} from 'react-redux';
// import {Root} from 'native-base';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import Home from './Home';
// import LoginScreen from './LoginScreen';
// import SignUpScreen from './SignUpScreen';
// import AddRoutineScreen from './AddRoutineScreen';
// import PreviousRoutine from './PreviousRoutine';
// import PreviousRoutineDetail from './PreviousRoutineDetail';

// const Stack = createStackNavigator();

// const MainNavigator = props => {
//   return (
//     <Root>
//       <NavigationContainer>
//         <Stack.Navigator
//           screenOptions={{
//             headerShown: false,
//           }}>
//           <Stack.Screen
//             name="Home"
//             component={Home}
//             options={{title: 'home'}}
//           />
//           <Stack.Screen
//             name="Login"
//             component={
//               useSelector(state => state.auth.status)
//                 ? PreviousRoutine
//                 : LoginScreen
//             }
//           />
//           <Stack.Screen name="SignUp" component={SignUpScreen} />
//           <Stack.Screen name="AddRoutine" component={AddRoutineScreen} />
//           <Stack.Screen
//             name="PreviousRoutineDetail"
//             component={PreviousRoutineDetail}
//           />
//           <Stack.Screen name="AllRoutine" component={PreviousRoutine} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Root>
//   );
// };
// export default MainNavigator;

import React, {useState, useEffect, Component} from 'react';
import {useSelector, connect} from 'react-redux';
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

// const MainStack = createStackNavigator({
//   AllRoutine: {screen: PreviousRoutine},
//   AddRoutine: {screen: AddRoutineScreen},
//   PreviousRoutineDetail: {screen: PreviousRoutineDetail},
//   initialRouteName: 'home',
// });

// const MainNavigator = props => {
//   const initStatus = useSelector(state => state.auth.status);
//   const [status, setStatus] = useState(initStatus);

//   useEffect(() => {
//     setStatus(initStatus);
//   }, [initStatus]);

//   return (
//     <Root>
//       <NavigationContainer>
//         <Stack.Navigator
//           screenOptions={{
//             headerShown: false,
//           }}>
//           {status === true && status !== 'error' ? (
//             <>
//               <Stack.Screen name="AllRoutine" component={PreviousRoutine} />
//               <Stack.Screen name="AddRoutine" component={AddRoutineScreen} />
//               <Stack.Screen
//                 name="PreviousRoutineDetail"
//                 component={PreviousRoutineDetail}
//               />
//             </>
//           ) : (
//             <>
//               <Stack.Screen
//                 name="Home"
//                 component={Home}
//                 options={{title: 'home'}}
//               />
//               <Stack.Screen name="Login" component={LoginScreen} />
//               <Stack.Screen name="SignUp" component={SignUpScreen} />
//             </>
//           )}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Root>
//   );
// };
// export default MainNavigator;

class MainNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps, 'Main stack navigator');
    const {status} = this.state;

    this.setState({
      status: nextProps.auth.status,
    });
  }

  render() {
    const {status} = this.state;
    const {uid} = this.props.auth;
    return (
      <Root>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            {status === true ? (
              <>
                <Stack.Screen name="AllRoutine" component={PreviousRoutine} />
                <Stack.Screen name="AddRoutine" component={AddRoutineScreen} />
                <Stack.Screen
                  name="PreviousRoutineDetail"
                  component={PreviousRoutineDetail}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="Home"
                  component={Home}
                  options={{title: 'home'}}
                />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </Root>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};
export default connect(
  mapStateToProps,
  {},
)(MainNavigator);
