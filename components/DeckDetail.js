import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { resetMarks } from '../actions'
import { resetAnswers } from '../utils/api'

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.deck,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black'
      }
    }
  }

  startQuiz = () => {
    const { title } = this.props

    resetAnswers(title)
    this.props.dispatch(resetMarks(title))
    this.props.navigation.navigate('Quiz', { deck: title })
  }

  render() {
    const { title, questions } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.deckInfo}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.cards}>{questions.length} cards</Text>
        </View>
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('AddCard', { deck: title })}>
            <Text style={styles.buttonText}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={ styles.button}
            onPress={questions.length > 0 ? this.startQuiz : () => {}}>
            <Text
              style={questions.length > 0
                      ? styles.buttonText
                      : [styles.buttonText, styles.buttonDisabled]}>
              Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deckInfo: {
    flex: 1,
    marginTop: 100,
    paddingTop: 10,
    paddingBottom: 10,
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 70,
    textAlign: 'center'
  },
  cards: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 30,
    color: 'gray'
  },
  actions: {
    flex: 1
  },
  buttonDisabled: {
    color: 'gray',
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

function mapStateToProps(state, { navigation }){
  return state[navigation.state.params.deck]
}

export default connect(mapStateToProps)(DeckDetail)
