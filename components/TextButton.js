import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function TextButton({ children, onPress, style={} }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}>
      <Text style={[styles.text, style]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 7,
    height: 60,
    marginLeft: 60,
    marginRight: 60,
    marginTop: 10,
    marginBottom: 10
  },
  text: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  }
})
