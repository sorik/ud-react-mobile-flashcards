import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Quiz extends Component {
  render() {
    const { deck } = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <Text>Quiz view for {deck}</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    flex:1
  }
}

export default Quiz
