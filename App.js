import React from 'react'
import { StackNavigator } from 'react-navigation'
import DecksList from './components/DecksList'
import DeckDetail from './components/DeckDetail'

const decks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  Ruby: {
    title: 'Ruby',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

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

export default class App extends React.Component {
  render() {
    return (
      <MainNavigator screenProps={{ decks }}/>
    );
  }
}
