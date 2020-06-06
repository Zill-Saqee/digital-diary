import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text as CustomText, YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning:']);
import {addRoutine} from '../redux/actions/routineActions';
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
  Toast,
} from 'native-base';
class AddRoutineScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adding: false,
      title: 't',
      description: 'd',
    };
  }

  componentWillReceiveProps(nextProps) {
    const {added, adding} = nextProps;
    console.log(added, 'Add Routine');
    if (!adding) {
      this.setState({
        adding: false,
      });
    }
    if (added) {
      this.setState({
        title: '',
        description: '',
      });
      Toast.show({
        text: 'Added successfully',
        buttonText: 'ok',
        duration: 2000,
        type: 'success',
      });
    }
  }

  validate = () => {
    const {title, description} = this.state;
    if (title.length < 5) {
      Toast.show({
        text: 'Title is too short',
        buttonText: 'ok',
        duration: 2000,
        type: 'info',
      });
      return false;
    }
    if (description.length < 10) {
      Toast.show({
        text: 'Description is too short',
        buttonText: 'ok',
        duration: 2000,
        type: 'info',
      });
      return false;
    }
    return true;
  };

  addNewRoutine = () => {
    const {title, description} = this.state;
    const {uid} = this.props;
    if (this.validate()) {
      this.setState({
        adding: true,
      });
      this.props.addRoutine({title, description}, uid);
    }
  };

  render() {
    const {title, description, adding} = this.state;
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
          <CustomText style={{fontSize: 22, marginBottom: -22}}>
            Add Your Today's Amazing Story
          </CustomText>
        </View>
        {/* <Content> */}
        <Form>
          <Item floatingLabel last>
            <Label>Title</Label>
            <Input
              bordered
              value={title}
              onChangeText={title => this.setState({title})}
            />
          </Item>
          <Textarea
            rowSpan={5}
            bordered
            value={description}
            onChangeText={description =>
              this.setState({
                description,
              })
            }
            placeholder="Your Story"
          />
          <Button full info disabled={adding} onPress={this.addNewRoutine}>
            <Text padder>Add</Text>
          </Button>
        </Form>
        {/* </Content> */}
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    uid: state.auth.uid,
    adding: state.routine.adding,
    added: state.routine.added,
  };
};
export default connect(
  mapStateToProps,
  {addRoutine},
)(AddRoutineScreen);
