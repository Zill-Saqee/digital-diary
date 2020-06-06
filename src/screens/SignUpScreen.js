import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signUpUser} from '../redux/actions/authActions';
// import auth from '@react-native-firebase/auth';
// import database from '@react-native-firebase/database';
import validator from 'validator';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Left,
  Right,
  Body,
  Title,
  Subtitle,
  Icon,
  Toast,
} from 'native-base';
class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      signingUp: false,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {auth} = nextProps;
    console.log('props signup', nextProps.auth);
    if (auth.status === true) {
      this.setState({
        signingUp: false,
      });
      // this.props.navigation.push('AllRoutine');
    } else if (auth.status === 'error') {
      console.log('auth status error sign up');
      Toast.show({
        text: 'Something went wrong',
        buttonText: 'ok',
        duration: 5000,
        type: 'danger',
      });
      this.setState({
        signingUp: false,
      });
    } else {
      Toast.show({
        text: 'Something went wrong',
        buttonText: 'ok',
        duration: 5000,
        type: 'danger',
      });
      this.setState({
        signingUp: false,
      });
    }
  }

  validate = () => {
    const {name, email, password} = this.state;
    if (
      validator.isEmpty(email) ||
      validator.isEmpty(password) ||
      validator.isEmpty(name)
    ) {
      Toast.show({
        text: 'Please provide complete information',
        buttonText: 'ok',
        duration: 5000,
        type: 'info',
      });
      return false;
    }
    if (!validator.isEmail(email)) {
      Toast.show({
        text: 'Please provide valid email',
        buttonText: 'understood',
        duration: 50000,
        type: 'info',
      });
      return false;
    }
    return true;
  };

  // SignUp = () => {
  //   const {email, password, name} = this.state;
  //   if (this.validate()) {
  //     try {
  //       auth()
  //         .createUserWithEmailAndPassword(email, password)
  //         .then(res => {
  //           console.log(res);
  //           let createdAt = new Date();
  //           console.log('User account created & signed in!');
  //           database()
  //             .ref('users/' + res.user.uid)
  //             .set({
  //               name: name,
  //               email: email,
  //               createdAt: createdAt,
  //             });
  //         })
  //         .catch(error => {
  //           if (error.code === 'auth/email-already-in-use') {
  //             console.log('That email address is already in use!');
  //             Toast.show({
  //               text: 'Email is already in use',
  //               buttonText: 'dismiss',
  //               duration: 5000,
  //               type: 'danger',
  //             });
  //           }

  //           if (error.code === 'auth/invalid-email') {
  //             console.log('That email address is invalid!');
  //             Toast.show({
  //               text: 'Invalid Email',
  //               buttonText: 'ok',
  //               duration: 5000,
  //               type: 'danger',
  //             });
  //           }

  //           console.error(error);
  //         });
  //     } catch (error) {
  //       console.log(error.toString(error));
  //     }
  //   }
  // };

  addNewUser = () => {
    const {email, password, name} = this.state;
    if (this.validate()) {
      this.setState({
        signingUp: true,
      });
      console.log(email, password, name, 'signup ui');
      this.props.signUpUser(email, password, name);
    }
  };

  render() {
    const {name, email, password, signingUp} = this.state;
    const {navigation} = this.props;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Subtitle>Go Back</Subtitle>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Name</Label>
              <Input
                value={name}
                onChangeText={name =>
                  this.setState({
                    name,
                  })
                }
              />
            </Item>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input
                value={email}
                onChangeText={email =>
                  this.setState({
                    email,
                  })
                }
              />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input
                value={password}
                onChangeText={password =>
                  this.setState({
                    password,
                  })
                }
              />
            </Item>
            <Button block info onPress={this.addNewUser} disabled={signingUp}>
              <Text>Sign Up</Text>
            </Button>
          </Form>
        </Content>
      </Container>
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
  {signUpUser},
)(SignUpScreen);
