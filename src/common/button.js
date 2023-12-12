import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

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
