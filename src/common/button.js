import React from 'react';
import { View, Text,Pressable,StyleSheet } from 'react-native'
import { scale } from '../utils/scale';

export default function FilledButton({
    text = '',
    btnProps = {},
    textProps = {},
    ...rest
}) {

    const {
        className: btnClassName = ''
    } = btnProps;

    const {
        className: textClassName = ''
    } = textProps;

    return (
        <TouchableOpacity
            className={`bg-red p-2 rounded-md ${btnClassName}`}
            {...btnProps}
            {...rest}
        >
            <Text
                className={`text-white text-center font-bold text-base ${textClassName}`}
                {...textProps}
            >
                {text}
            </Text>
        </TouchableOpacity>
    );
}

export const PrimaryButton = ({title,onClick}) => {
  return (
      <Pressable style={styles.button} onPress={onClick}>
            <Text style={styles.buttonText}>{title}</Text>
      </Pressable> 
  )
}


export const SecondaryButton = ({title,onClick}) => {
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
    color:"black"
  },
  buttonText: {
    color:"black",
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:scale(20)
  },
});
