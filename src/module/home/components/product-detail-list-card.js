import React from 'react';
import { View, Text, Image, } from 'react-native';
import STRINGS from '../../../utils/strings';

export default function ProductDetailListCard(props) {
    const {
        // _id = '',
        brandName = '',
        unitType = '',
        unitQuantity = 0,
        unitPrice = 0,
        unitAdded = 1,
        name = '',
        images: [img] = [],
    } = props;

    return (
        <View className='flex-row gap-x-2 bg-white'>
            <View className='justify-center'>
                <View className='bg-white p-1 rounded-lg border border-grey'>
                    <Image source={{ uri: img }} className='rounded-md aspect-square h-12' style={{ resizeMode: 'contain' }} />
                </View>
            </View>

            <View className='flex-2 justify-center'>
                <Text className='text-base text-black font-semibold truncate'>{name}</Text>
                <Text className='text-12 text-black truncate'>{brandName}</Text>
                <Text className='text-12 text-black truncate'>{unitPrice ? `${STRINGS.rupeeSign}${unitPrice} | ` : ``}{unitQuantity}{unitType}</Text>
            </View>

            <View className='flex-1 justify-center items-center'>
                <Text className='text-xs text-black font-semibold truncate text-center mb-1'>{unitAdded} x {unitQuantity}{unitType}</Text>
            </View>
            <View className='flex-1 justify-center items-center'>
                {unitPrice ? <Text className='text-base text-black font-bold truncate text-center mb-1'>{STRINGS.rupeeSign}{unitAdded * unitPrice}</Text> : <></>}
            </View>
        </View>
    );
}
