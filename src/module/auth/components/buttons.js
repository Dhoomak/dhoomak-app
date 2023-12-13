import { View, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { scale } from '../../../utils/scale'

export const PrimaryButton = ({ title, onClick }) => {
  return (
    <Pressable style={styles.button} onPress={onClick}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  )
}


export const SecondaryButton = ({ title, onClick }) => {
  return (
    <Pressable style={styles.button} onPress={onClick}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFC107',
    padding: 12,
    borderRadius: 5,
    color: "black"
  },
  buttonText: {
    color: "black",
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: scale(20)
  },
});
