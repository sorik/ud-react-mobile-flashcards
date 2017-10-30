import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import TextButton from './TextButton'
import { clearLocalNotification, setLocalNotification,} from '../utils/notificationHelper'

class Results extends Component {
  componentDidMount() {
    clearLocalNotification()
      .then(setLocalNotification)
  }

  render() {
    const { deck, total, score, navigation } = this.props
    let unique = new Set(score)

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {deck}
        </Text>
        <Text style={styles.score}>
          You answered {unique.size} questions correctly out of {total} questions.
        </Text>
        <View style={styles.actions}>
          <TextButton
            onPress={() => navigation.navigate('Quiz', { deck })}>
            Restart Quiz
          </TextButton>
          <TextButton
            onPress={() => navigation.navigate('DeckDetail', { deck })}>
            Back to Deck
          </TextButton>
        </View>
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
    marginTop: 50,
    padding: 10,
    fontWeight: 'bold'
  },
  score: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    padding: 10
  },
  actions: {
    marginTop: 40,
    paddingTop: 10,
    paddingBottom: 10
  }
})
function mapStateToProps(state, { navigation }) {
  const { deck } = navigation.state.params

  return {
    deck,
    total: state[deck].questions.length,
    score: state[deck].correctAnswers
  }
}

export default connect(mapStateToProps)(Results)
