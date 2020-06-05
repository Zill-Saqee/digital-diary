import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Subtitle,
} from 'native-base';
export default class PreviousRoutineDetail extends Component {
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
            <Subtitle>Go Back</Subtitle>
          </Body>
          <Right />
        </Header>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                {/* <Thumbnail source={{uri: 'Image URL'}} /> */}
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                {/* <Image
                  source={{uri: 'Image URL'}}
                  style={{height: 200, width: 200, flex: 1}}
                /> */}
                <Text>
                  Your text here text here text here text here text here text
                  here text here text here text here text here text here text
                  here text here text here text here text here text here text
                  here text here text here text here text here text here Your
                  text here text here text here text here text here text here
                  text here text here text here text here text here text here
                  text here text here text here text here text here text here
                  text here text here text here text here text here Your text
                  here text here text here text here text here text here text
                  here text here text here text here text here text here text
                  here text here text here text here text here text here text
                  here text here text here text here text here Your text here
                  text here text here text here text here text here text here
                  text here text here text here text here text here text here
                  text here text here text here text here text here text here
                  text here text here text here text here Your text here text
                  here text here text here text here text here text here text
                  here text here text here text here text here text here text
                  here text here text here text here text here text here text
                  here text here text here text here Your text here text here
                  text here text here text here text here text here text here
                  text here text here text here text here text here text here
                  text here text here text here text here text here text here
                  text here text here text here
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              {/* <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>06/06/2020</Text>
                </Button>
              </Left> */}
              <Right>
                <Button delete small>
                  <Text>Delete</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
