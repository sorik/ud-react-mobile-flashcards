import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

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
    const { title } = this.props

    return (
      <View>
        <Text>{title}</Text>
      </View>
    )
  }
}

function mapStateToProps(state, { navigation }){
  return state[navigation.state.params.deck]
}

export default connect(mapStateToProps)(DeckDetail)
