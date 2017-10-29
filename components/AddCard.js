import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import TextButton from './TextButton'
import { connect } from 'react-redux'
import { addCardToDeck } from '../actions'

class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  }

  submit = () => {
    const { deck } = this.props.navigation.state.params

    this.props.dispatch(addCardToDeck({
      deck,
      card: {
        question: this.state.question,
        answer: this.state.answer
      }
    }))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <Text style={styles.inputTitle}>Question</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={text => this.setState({ question: text})}
            value={this.state.question} />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputTitle}>Answer</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={text => this.setState({ answer: text})}
            value={this.state.answer} />
        </View>
        <TextButton onPress={this.submit}>Submit</TextButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    margin: 10
  },
  inputTitle: {
    fontSize: 20,
    textAlign: 'left',
    marginTop: 30,
    marginBottom: 30,
    padding: 10
  },
  inputText: {
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 7
  }
})

export default connect()(AddCard)
