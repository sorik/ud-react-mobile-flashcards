import { ADD_DECK, RECEIVE_DECKS } from '../actions'

function decks(state={}, action) {
  const { title, decks } = action

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

    default:
      return state
  }
}

export default decks
