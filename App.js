import React from 'react'
import { StackNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import DecksList from './components/DecksList'
import DeckDetail from './components/DeckDetail'
import reducer from './reducers'

const MainNavigator = StackNavigator({
  Home: {
    screen: DecksList,
  },
  DeckDetail: {
    screen: DeckDetail,
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
