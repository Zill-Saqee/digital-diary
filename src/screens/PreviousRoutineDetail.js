import React, {Component} from 'react';
import {connect} from 'react-redux';
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
class PreviousRoutineDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {navigation, route, routines} = this.props;
    console.log(route.params.id);
    let story = routines.filter(r => r.id === route.params.id)[0];
    let {title, description, createdAt} = story;
    console.log(createdAt.toDate().toString());
    let date = createdAt.toDate().toLocaleString();
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
                  <Text>{title}</Text>
                  <Text note>{date}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                {/* <Image
                  source={{uri: 'Image URL'}}
                  style={{height: 200, width: 200, flex: 1}}
                /> */}
                <Text>{description}</Text>
              </Body>
            </CardItem>
            <CardItem>
              {/* <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>06/06/2020</Text>
                </Button>
              </Left> */}
              {/* <Right>
                <Button delete small>
                  <Text>Delete</Text>
                </Button>
              </Right> */}
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    routines: state.routine.routineData,
  };
};
export default connect(mapStateToProps)(PreviousRoutineDetail);
