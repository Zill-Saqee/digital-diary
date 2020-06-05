import React, {Component} from 'react';
import {
  Container,
  View,
  Content,
  Textarea,
  Form,
  Text,
  Button,
  Header,
  Left,
  Icon,
  Body,
  Subtitle,
  Right,
  Item,
  Label,
  Input,
} from 'native-base';
export default class AddRoutineScreen extends Component {
  render() {
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
            <Subtitle>Back</Subtitle>
          </Body>
          <Right />
        </Header>
        <View>
          <Text>Add Your Today's Amazing Story</Text>
        </View>
        <Content>
          <Form>
            <Item floatingLabel last>
              <Label>Title</Label>
              <Input bordered />
            </Item>
            <Textarea rowSpan={5} bordered placeholder="Your Story" />
            <Button full info>
              <Text padder>Add</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
