import React from 'react';
import { View, Text } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons'

// utils
import COLORS from '../../utils/color';

const ResponseModalWrapper = (props) => {
    const {
        iconName = "checkmark-circle",
        iconSize = 100,
        iconColor = COLORS.secondary,
        title = '',
        description = '',
        children = <></>,
    } = props;

    return (
        <View className='justify-center items-center flex-1 bg-white'>
            <View className='justify-center items-center mb-5'>
                <View className='mb-3'>
                    <IonIcon name={iconName} size={iconSize} color={iconColor} />
                </View>
                <Text className='text-lg mb-2 font-bold' style={{ color: iconColor }} >{title}</Text>
                {description ? <Text className='text-xs mb-1 text-black font-medium'>{description}</Text> : <></>}
            </View>
            {children}
        </View>
    );
};

export default ResponseModalWrapper;
