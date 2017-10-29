import React, { Component } from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'

class DecksList extends Component {
  render() {
    const { decks } = this.props

    return (
      <View style={styles.container}>
        <FlatList
          data={Object.values(decks)}
          keyExtractor={(item, index) => item.title}
          renderItem={({ item }) => {
            return (
              <View style={[styles.separator, styles.deck]}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.cards}>{item.questions.length} cards</Text>
              </View>
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
    paddingTop: 50,
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

export default DecksList
