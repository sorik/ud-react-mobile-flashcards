export const ADD_DECK = 'ADD_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_CARD = 'ADD_CARD'
export const CORRECT_ANSWER = 'CORRECT_ANSWER'
export const RESET_MARKS = 'RESET_MARKS'

export function addDeck(title) {
  return {
    type: ADD_DECK,
    title
  }
}

export function receiveDecks({ decks }) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function addCard({ deck, card }) {
  return {
    type: ADD_CARD,
    deck,
    card
  }
}

export function resetMarks(deck) {
  return {
    type: RESET_MARKS,
    deck
  }
}

export function correctAnswer({ deck, index }) {
  return {
    type: CORRECT_ANSWER,
    deck,
    index
  }
}
