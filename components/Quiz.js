import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import TextButton from './TextButton'

class Quiz extends Component {
  state = {
    isQuestion: true
  }

  toggleView = () => {
    var toggle = !this.state.isQuestion
    this.setState({ isQuestion: toggle })
  }

  render() {
    const { deck, index, questions, navigation } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.count}>
          {index + 1} / {questions.length}
        </Text>
        <Text style={styles.quiz}>
          {this.state.isQuestion
            ? questions[index].question
            : questions[index].answer}
        </Text>
        <TouchableOpacity
          onPress={this.toggleView}>
          <Text style={styles.toggleButton}>
            {this.state.isQuestion
              ? 'Answer'
              : 'Question'}
          </Text>
        </TouchableOpacity>
        <View style={styles.actions}>
          <TextButton
            style={styles.correctButton }>
            Correct
          </TextButton>
          <TextButton
            style={styles.incorrectButton}>
            Incorrect
          </TextButton>
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flex:1
  },
  count: {
    fontSize: 15,
    textAlign: 'left',
    marginLeft: 10,
    paddingTop: 10,
  },
  quiz: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 50,
    paddingTop: 20,
    paddingBottom: 10,
  },
  toggleButton: {
    fontSize: 15,
    color: 'red',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold'
  },
  actions: {
    marginTop: 40,
    paddingTop: 10,
    paddingBottom: 10
  },
  correctButton: {
    backgroundColor: 'green'
  },
  incorrectButton: {
    backgroundColor: 'red'
  }
}

function mapStateToProps(state, { navigation }) {
  const { deck, index } = navigation.state.params

  return {
    questions: state[deck].questions,
    deck,
    index: index ? index : 0
  }
}

export default connect(mapStateToProps)(Quiz)
