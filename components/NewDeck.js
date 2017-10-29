import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { addDeck } from '../actions'
import { connect } from 'react-redux'
import { submitDeck } from '../utils/api'
import TextButton from './TextButton'

class NewDeck extends Component {
  state = {
    text: ''
  }

  submit = () => {
    const { text } = this.state

    this.setState({ text: '' })
    submitDeck(text)
    this.props.dispatch(addDeck(text))
    this.props.navigation.navigate('DeckDetail', { deck: text })

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
        <TextButton onPress={this.submit}>
          Submit
        </TextButton>
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
})
export default connect()(NewDeck)
