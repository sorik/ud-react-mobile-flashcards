import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import DecksList from './components/DecksList'
import DeckDetail from './components/DeckDetail'
import NewDeck from './components/NewDeck'
import AddCard from './components/AddCard'
import reducer from './reducers'

const Tabs = TabNavigator({
  Main: {
    screen: DecksList,
    navigationOptions: {
      tabBarLabel: 'DECKS',
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'NEW DECK',
    }
  }
}, {
  tabBarOptions: {
    labelStyle: {
      fontSize: 20,
    }
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckDetail: {
    screen: DeckDetail,
  },
  AddCard: {
    screen: AddCard,
  }
}, {
  headMode: 'none'
})


const store = createStore(reducer)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
