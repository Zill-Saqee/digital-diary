import React, {Component} from 'react';
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
export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
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
        buttonText: 'understood',
        duration: 5000,
        type: 'warning',
      });
      return;
    }
    if (!validator.isEmail(email)) {
      Toast.show({
        text: 'Please provide valid email',
        buttonText: 'understood',
        duration: 50000,
        type: 'warning',
      });
      return;
    }
  };
  render() {
    const {name, email, password} = this.state;
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
            <Button full info onPress={this.validate()}>
              <Text>Sign Up</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
