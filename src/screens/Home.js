import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'native-base';
import PreviousRoutine from './PreviousRoutine';

const Home = ({navigation}) => {
  const authenticated = useSelector(state => state.auth.status);

  if (authenticated) {
    return <PreviousRoutine />;
  }

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.title}>Welcome To Digital Diary</Text>
      <Text style={styles.description}>
        Create an account to save your daily routine and access it from
        anywhere. It's free forever
      </Text>
      <Button info full onPress={() => navigation.navigate('Login')}>
        <Text> Login </Text>
      </Button>
      <Text>OR</Text>
      <Button info full onPress={() => navigation.navigate('SignUp')}>
        <Text> Sign Up </Text>
      </Button>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  btn: {
    minWidth: 100,
    marginTop: 10,
  },
  homeContainer: {
    height: '100%',
    backgroundColor: 'darkcyan',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 29,
    color: 'white',
  },
  description: {
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
    letterSpacing: 1,
    marginTop: 10,
  },
});
