import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { View, StatusBar, Platform } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import DecksList from './components/DecksList'
import DeckDetail from './components/DeckDetail'
import NewDeck from './components/NewDeck'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import Results from './components/Results'
import reducer from './reducers'
import { Constants } from 'expo'

function AppStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

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
    },
  },
  navigationOptions: {
    header: null
  },
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
  },
  Quiz: {
    screen: Quiz,
  },
  Results: {
    screen: Results,
  }
}, {
  headerMode: 'screen',
})


const store = createStore(reducer)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <AppStatusBar backgroundColor='black' barStyle="light-content"/>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
