import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NavigationCard({ item }) {
    const navigation = useNavigation();
    const {
        title = '',
        onPress = () => { },
        img = '',
    } = item;

    return (
        <TouchableOpacity onPress={() => onPress(navigation)} className='bg-white p-3 rounded-lg w-full aspect-square flex justify-center items-center'>
            <Image source={img} className='w-full h-24 mx-auto mb-2' resizeMode='contain' />
            <Text className='text-center text-base font-semibold text-black'>{title}</Text>
        </TouchableOpacity>
    );
}
