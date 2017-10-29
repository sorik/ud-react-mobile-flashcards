import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'flashcards:decks'

export function submitDeck(title) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: [title],
      questions: []
    }
  }))
}
