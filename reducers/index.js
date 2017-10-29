import { ADD_DECK } from '../actions'

const dummyDecks = {
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

function decks(state=dummyDecks, action) {
  const { title } = action

  switch(action.type) {
    case ADD_DECK:
      var decks = {
        ...state,
        [title]: {
          title: [title],
          questions: []
        }
      }

      console.log(decks)
      return decks 
    default:
      return state
  }
}

export default decks
