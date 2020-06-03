import React, {Component} from 'react';
import {
  Container,
  View,
  Content,
  Textarea,
  Form,
  Text,
  Button,
} from 'native-base';
export default class AddRoutineScreen extends Component {
  render() {
    return (
      <Container>
        <View>
          <Text>Add Your Amazing Story</Text>
        </View>
        <Content padder>
          <Form>
            <Textarea rowSpan={5} bordered placeholder="Textarea" />
            <Button full info>
              <Text padder>Add</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
