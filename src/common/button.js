import React from 'react';
import { View, Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import { scale } from '../utils/scale';
import COLORS from '../utils/color';

export default function FilledButton({
    text = '',
    btnProps = {},
    textProps = {},
    ...rest
}) {

    const {
        className: btnClassName = '',
        ...restBtnProps
    } = btnProps;

    const {
        className: textClassName = '',
        ...restTextProps
    } = textProps;

    return (
        <TouchableOpacity
            className={`bg-primary p-2 rounded-md ${btnClassName}`}
            activeOpacity={0.7}
            {...restBtnProps}
            {...rest}
        >
            <Text
                className={`text-black text-center font-bold text-base ${textClassName}`}
                {...restTextProps}
            >
                {text}
            </Text>
        </TouchableOpacity>
    );
}

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
        backgroundColor: COLORS.primary,
        padding: 10,
        paddingVertical: 10,
        borderRadius: 5,
        color: "black"
    },
    buttonText: {
        color: "black",
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: scale(15)
    },
});
