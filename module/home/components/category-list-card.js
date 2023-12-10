import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../../utils/color';

export default function CategoryListCard(props) {
    const {
        item = {},
        isActive = false,
        onCategoryPress = () => { }
    } = props;

    const { 
        id = '', 
        name = '', 
        img = '',
     } = item;

    const colorList = isActive ? [COLORS['secondary-shade'], COLORS.secondary] : [COLORS.white, COLORS.white];
    const border = isActive ? 'border-secondary' : 'border-grey';

    return (
        <TouchableOpacity className='w-full relative p-2' onPress={() => onCategoryPress(id)}>
            <LinearGradient colors={colorList} className='absolute top-2 left-0 h-full  w-1.5 rounded-r-md'></LinearGradient>
            <View className={`w-16 mx-auto bg-white overflow-hidden rounded-md border p-1 ${border} `}>
                <Image
                    source={{ uri: img }}
                    style={{ resizeMode: 'contain' }}
                    className='w-full h-12 rounded-sm'
                />
            </View>
            <Text className='text-center text-xs text-black'>{name}</Text>
        </TouchableOpacity>
    );
}
