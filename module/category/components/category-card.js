import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../../utils/color';

export default function CategoryCard({ item }) {
    const { name, img } = item;
    return (
        <TouchableOpacity activeOpacity={0.70} className='w-full'>
            <LinearGradient colors={[COLORS['transparent-green'], COLORS.white]} className='p-3 rounded-lg'>
                <Image
                    source={{ uri: img }}
                    style={{ resizeMode: 'contain' }}
                    className='w-full h-12 mb-2'
                />
                <Text className='text-center text-black text-sm'>{name}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}
