import React, {Component} from 'react';
import {connect} from 'react-redux';
import validator from 'validator';
import {loginUser} from '../redux/actions/authActions';
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
  Subtitle,
  Icon,
  Toast,
} from 'native-base';
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'abc@gmail.com',
      password: 'abc@gmail.com',
      loggingIn: false,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('login screen before');
    const {auth} = nextProps;
    console.log('props ', nextProps.auth);
    if (auth.status === true) {
      this.setState({
        loggingIn: false,
      });
      // this.props.navigation.push('AllRoutine');
    } else if (auth.status === 'error' || auth.status === false) {
      this.setState({
        loggingIn: false,
      });
      Toast.show({
        text: 'Something went wrong',
        buttonText: 'ok',
        duration: 5000,
        type: 'danger',
      });
    } else {
      this.setState({
        loggingIn: false,
      });
    }
  }

  validate = () => {
    const {email, password} = this.state;
    if (validator.isEmpty(email) || validator.isEmpty(password)) {
      Toast.show({
        text: 'Please provide complete information',
        buttonText: 'ok',
        duration: 5000,
        type: 'warning',
      });
      return false;
    }
    if (!validator.isEmail(email)) {
      Toast.show({
        text: 'Please provide valid email',
        buttonText: 'ok',
        duration: 50000,
        type: 'warning',
      });
      return false;
    }
    return true;
  };

  SignIn = () => {
    const {email, password} = this.state;
    if (this.validate()) {
      this.setState({
        loggingIn: true,
      });
      console.log(email, password, 'ui');
      this.props.loginUser(email, password);
    }
  };

  render() {
    const {email, password, loggingIn} = this.state;
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
            {/* <Title>Title</Title> */}
            <Subtitle>Go Back</Subtitle>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
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
            <Button
              block
              info
              disabled={loggingIn}
              onPress={() => {
                this.SignIn();
              }}>
              <Text>Sign In</Text>
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
  {loginUser},
)(LoginScreen);
