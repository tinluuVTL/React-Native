import React, { Component } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

class GreetingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: ''
    };
  }

  handleSubmit = () => {
    const { name } = this.state;
    const greeting = `Xin chào, ${name}!`;
    this.setState({ greeting });
  };

  render() {
    const { greeting } = this.state;

    return (
      <View>
      <Text style={{fontWeight: 'bold'}}> Enter your name:</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 5,
            padding: 10,
            top: 10,
          }}
          placeholder="Nhập tên"
          onChangeText={(text) => this.setState({ name: text })}
        />
        <Button title="Submit" onPress={this.handleSubmit} />
        <Text>{greeting}</Text>
      </View>
    );
  }
}

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <GreetingForm />
     
    </View>
  );
};

export default App;