import React, {Component} from 'react';
import {connect} from 'react-redux';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {logOutUser} from '../redux/actions/authActions';
import {getAllRoutine} from '../redux/actions/routineActions';
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
class PreviousRoutine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      routineData: null,
    };
  }

  componentDidMount() {
    const {uid, routine} = this.props;
    console.log(routine);
    this.props.getAllRoutine(uid);
  }

  componentWillReceiveProps(nextProps) {
    const {routine} = nextProps;
    console.log(routine.routineData, 'nextprops All Routine');
    if (routine.fetching === false) {
      this.setState({
        loading: false,
        routineData: routine.routineData,
      });
    }
  }

  render() {
    const {navigation, loggedIn, uid} = this.props;
    const {loading, routineData} = this.state;
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
              <Text onPress={this.props.logOutUser}>Logout</Text>
            </Button>
            {/* <Button transparent>
              <Icon name="more" />
            </Button> */}
          </Right>
        </Header>
        {!loading === true ? (
          <>
            {routineData.length > 1 ? (
              <Content>
                <List>
                  {routineData.map(({id, title, description}, i) => (
                    <ListItem key={i} thumbnail>
                      <Body>
                        <Text>{title}</Text>
                        <Text note numberOfLines={1}>
                          {description}
                        </Text>
                      </Body>
                      <Right>
                        <Button transparent>
                          <Text
                            onPress={() =>
                              navigation.navigate('PreviousRoutineDetail', {
                                id,
                              })
                            }>
                            View
                          </Text>
                        </Button>
                      </Right>
                    </ListItem>
                  ))}
                </List>
              </Content>
            ) : (
              <Text>You have not saved any rouine yet</Text>
            )}
          </>
        ) : (
          <Text>loading</Text>
        )}
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    loggedIn: state.auth.status,
    uid: state.auth.uid,
    routine: state.routine,
  };
};
export default connect(
  mapStateToProps,
  {logOutUser, getAllRoutine},
)(PreviousRoutine);
