import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class Answer extends Component {
  render() {
    const { deck, index, question } = this.props

    return (
      <View style={styles.container}>
        <Text>{index} of question from {deck} is {question.answer}</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1
  }
}

function mapStateToProps(state, { navigation }) {
  const { deck, index } = navigation.state.params

  return {
    deck,
    index,
    question: state[deck].questions[index]
  }
}

export default connect(mapStateToProps)(Answer)
