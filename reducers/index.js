import { ADD_DECK, RECEIVE_DECKS, ADD_CARD } from '../actions'

function decks(state={}, action) {
  const { title, decks, deck, card } = action

  switch(action.type) {
    case ADD_DECK:
      return {
        ...state,
        [title]: {
          title,
          questions: []
        }
      }

    case RECEIVE_DECKS:
      return decks

    case ADD_CARD:
      var result = {
        ...state,
        [deck]: {
          ...state[deck],
          questions: [...state[deck].questions, card]
        }
      }
      return result

    default:
      return state
  }
}

export default decks
