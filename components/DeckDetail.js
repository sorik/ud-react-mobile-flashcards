import React, { Component } from 'react'
import { View, Text } from 'react-native'

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

  render() {
    const { deck } = this.props.navigation.state.params

    return (
      <View>
        <Text>{deck}</Text>
      </View>
    )
  }
}

export default DeckDetail
