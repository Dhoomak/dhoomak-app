import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import commonStyles from '../../../common/styles';

export default function ItemDetail({ route }) {
    const { id, item } = route.params;

    const {
        name = '',
        brand = '',
        quantity = '',
        quantityType = '',
        price = '',
        img = '',
    } = item;

    return (
        <View className='bg-white flex-1 justify-center items-center p-2'>
            {/* <Text>Item Detail</Text> */}
            <View className='w-full h-full p-2 py-3' >
                <View className='w-full mb-2' >
                    <Image source={{ uri: img }} className='w-full aspect-square' style={{ resizeMode: 'contain' }} />
                </View>
                <View className='w-full mb-6' >
                    <Text className='text-10'>{brand}</Text>
                    <Text className='text-xs text-black'>{name}</Text>
                </View>
                <View className='w-full mb-2' >
                    <Text className='text-10 text-black'>{quantity}{quantityType} quantity in Pack</Text>
                </View>
                <View className='flex flex-row '>
                    <Text className='text-xs text-black font-semibold flex-1'>₹{price}/{quantityType}</Text>
                    <TouchableOpacity className='bg-white rounded-sm px-3 shadow-md' style={commonStyles.shadow} >
                        <Text className='text-10 text-secondary font-semibold'>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
