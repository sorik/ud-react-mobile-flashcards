import { ADD_DECK, RECEIVE_DECKS, ADD_CARD, RESET_MARKS, CORRECT_ANSWER } from '../actions'

function decks(state={}, action) {
  const { title, decks, deck, card, index } = action

  switch(action.type) {
    case ADD_DECK:
      return {
        ...state,
        [title]: {
          title,
          questions: [],
          correctAnswers: []
        }
      }

    case RECEIVE_DECKS:
      return decks

    case ADD_CARD:
      return {
        ...state,
        [deck]: {
          ...state[deck],
          questions: [...state[deck].questions, card]
        }
      }

    case RESET_MARKS:
      console.log('reset')
      return {
        ...state,
        [deck]: {
          ...state[deck],
          correctAnswers: []
        }
      }

    case CORRECT_ANSWER:
      console.log(state)
      return {
        ...state,
        [deck]: {
          ...state[deck],
          correctAnswers: [...state[deck].correctAnswers, index]
        }
      }

    default:
      return state
  }
}

export default decks
