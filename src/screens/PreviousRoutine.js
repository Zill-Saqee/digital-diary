// import React, {Component} from 'react';
// import {StyleSheet} from 'react-native';
// import {
//   Container,
//   Header,
//   Content,
//   Icon,
//   Accordion,
//   Text,
//   View,
//   Body,
// } from 'native-base';
// import {Title} from 'react-native-paper';
// const dataArray = [
//   {title: 'First Element', content: 'Lorem ipsum dolor sit amet'},
//   {title: 'Second Element', content: 'Lorem ipsum dolor sit amet'},
//   {title: 'Third Element', content: 'Lorem ipsum dolor sit amet'},
// ];

// export default class PreviousRoutine extends Component {
//   _renderHeader(item, expanded) {
//     return (
//       <View style={styles.header}>
//         <Text style={{fontWeight: '600'}}> {item.title}</Text>
//         {expanded ? (
//           <Icon style={{fontSize: 18}} name="remove-circle" />
//         ) : (
//           <Icon style={{fontSize: 18}} name="add-circle" />
//         )}
//       </View>
//     );
//   }
//   _renderContent(item) {
//     return <Text style={styles.content}>{item.content}</Text>;
//   }
//   render() {
//     return (
//       <Container>
//         <Header>
//           <Body>
//             <Title>All Routine</Title>
//           </Body>
//         </Header>
//         <Content padder style={{backgroundColor: 'white'}}>
//           <Accordion
//             dataArray={dataArray}
//             animation={true}
//             expanded={true}
//             renderHeader={this._renderHeader}
//             renderContent={this._renderContent}
//           />
//         </Content>
//       </Container>
//     );
//   }
// }
// /* <br />; */

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     padding: 10,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#A9DAD6',
//   },
//   content: {
//     backgroundColor: '#e3f1f1',
//     padding: 10,
//     fontStyle: 'italic',
//   },
// });

import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Title,
  Icon,
} from 'native-base';
export default class PreviousRoutine extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Container>
        <Header>
          <Body>
            <Title>All Your Routine</Title>
          </Body>
          <Right>
            {/* <Button transparent>
              <Icon name="search" />
            </Button> */}
            <Button transparent>
              <Icon
                onPress={() => navigation.navigate('AddRoutine')}
                name="add"
              />
            </Button>
            {/* <Button transparent>
              <Icon name="more" />
            </Button> */}
          </Right>
        </Header>
        <Content>
          <List>
            <ListItem thumbnail>
              <Body>
                <Text>Sankhadeep 123</Text>
                <Text note numberOfLines={1}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text
                    onPress={() =>
                      navigation.navigate('PreviousRoutineDetail', {
                        id: '123',
                      })
                    }>
                    View
                  </Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text
                    onPress={() =>
                      navigation.navigate('PreviousRoutineDetail')
                    }>
                    View
                  </Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text
                    onPress={() =>
                      navigation.navigate('PreviousRoutineDetail')
                    }>
                    View
                  </Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text
                    onPress={() =>
                      navigation.navigate('PreviousRoutineDetail')
                    }>
                    View
                  </Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text
                    onPress={() =>
                      navigation.navigate('PreviousRoutineDetail')
                    }>
                    View
                  </Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text
                    onPress={() =>
                      navigation.navigate('PreviousRoutineDetail')
                    }>
                    View
                  </Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text
                    onPress={() =>
                      navigation.navigate('PreviousRoutineDetail')
                    }>
                    View
                  </Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text
                    onPress={() =>
                      navigation.navigate('PreviousRoutineDetail')
                    }>
                    View
                  </Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text
                    onPress={() =>
                      navigation.navigate('PreviousRoutineDetail')
                    }>
                    View
                  </Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text
                    onPress={() =>
                      navigation.navigate('PreviousRoutineDetail')
                    }>
                    View
                  </Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>
                  Its time to build a difference . .
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text
                    onPress={() =>
                      navigation.navigate('PreviousRoutineDetail')
                    }>
                    View
                  </Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
