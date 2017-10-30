import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'

class DecksList extends Component {

  componentDidMount() {
    getDecks()
      .then(decks => {
        this.props.dispatch(receiveDecks({ decks }))
      })
  }

  render() {
    const { decks } = this.props

    return (
      <View style={styles.container}>
        <FlatList
          data={Object.values(decks)}
          keyExtractor={(item, index) => item.title}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('DeckDetail', { deck: item.title })}
                  style={[styles.separator, styles.deck]}
                >
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.cards}>{item.questions.length} cards</Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deck: {
    flex: 1,
  },
  separator: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingTop: 20,
    paddingBottom: 20
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 50,
    textAlign: 'center'
  },
  cards: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 30
  }
})

function mapStateToProps(state) {
  return { decks: state }
}

export default connect(mapStateToProps)(DecksList)
