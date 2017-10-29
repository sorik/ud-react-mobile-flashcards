import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { addDeck } from '../actions'
import { connect } from 'react-redux'

class NewDeck extends Component {
  state = {
    text: ''
  }

  submit = () => {
    this.props.dispatch(addDeck(this.state.text))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.submit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
    padding: 10
  },
  input: {
    height: 60,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 7
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 7,
    height: 60,
    marginLeft: 60,
    marginRight: 60,
    marginTop: 10,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  }
})
export default connect()(NewDeck)
