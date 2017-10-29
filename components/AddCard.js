import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import TextButton from './TextButton'

class AddCard extends Component {
  submit = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <Text style={styles.inputTitle}>Question</Text>
          <TextInput style={styles.inputText} />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputTitle}>Answer</Text>
          <TextInput style={styles.inputText} />
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

export default AddCard
