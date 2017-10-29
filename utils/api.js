import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'flashcards:decks'

export function submitDeck(title) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      questions: []
    }
  }))
}

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(result => {
      if (result === null) {
        return {}
      }

      return JSON.parse(result)
    })
}

export function addCardToDeck(deck, card) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(result => {
      const decks = JSON.parse(result)
      AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [deck]: {
          questions: [...decks[deck].questions, card]
        }
      }))
    })
}
