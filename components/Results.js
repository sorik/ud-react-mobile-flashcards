import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class Results extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.score.length} of {this.props.total} for {this.props.deck}</Text>
      </View>
    )
  }
}

function mapStateToProps(state, { navigation }) {
  const { deck } = navigation.state.params

  return {
    deck,
    total: state[deck].questions.length,
    score: state[deck].correctAnswers
  }
}
export default connect(mapStateToProps)(Results)
