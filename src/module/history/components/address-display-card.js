import React from 'react';
import { View, Text } from 'react-native';

export default function AddressDisplayCard(props) {
    const {
        name = '',
        address = '',
        phone = '',
    } = props;

    return (
        <View className='bg-white rounded-lg p-3'>
            <Text className='text-black mb-2 text-12'>Deliver To</Text>
            <Text className='text-black mb-1 text-sm font-bold'>{name}</Text>
            <Text className='text-black mb-1 text-12'>{address}</Text>
            <View className='mb-1 flex-row'>
                <Text className='text-black text-12 mr-2'>
                    Phone:
                </Text>
                <Text className='text-black text-12 font-bold'>
                    +91{phone}
                </Text>
            </View>
        </View>
    );
}
