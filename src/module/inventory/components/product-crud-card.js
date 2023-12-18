import React from 'react';
import { View, Text, Image, TouchableHighlight, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { PRODUCTS_DEFAULT_IMAGE } from '../../../data/constant';
import { USER } from '../../../utils/strings/screen-name';
import STRINGS from '../../../utils/strings';
import { useDispatch } from 'react-redux';
import { addProductInventoryUnits, removeProductInventoryUnits, enterProductInventoryUnits } from '../reducers/inventory-reducer';

export default function ProductCrudCard(item) {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const {
        _id = '',
        brandName = '',
        unitType = '',
        unitQuantity = 0,
        unitPrice = 0,
        unitAdded = 1,
        name = '',
        images: [img = PRODUCTS_DEFAULT_IMAGE] = [],
    } = item;


    function handleNavigateToItemDetails() {
        navigation.navigate(USER.ITEM_DETAIL, { item })
    }
    function handleIncreementProductQuantity() {
        dispatch(addProductInventoryUnits({ _id }));
    }
    function handleDecrementProductQuantity() {
        dispatch(removeProductInventoryUnits({ _id }));
    }
    function handleEnterProductQuantity(value) {
        console.log(value)
        dispatch(enterProductInventoryUnits({ _id, value }));
    }

    return (
        <View className='p-2 px-3 flex-row gap-x-2 bg-white'>
            {/* Image with Navigation Options */}
            <View className='justify-center'>
                <TouchableHighlight underlayColor='white' onPress={handleNavigateToItemDetails}>
                    <View className='bg-white p-1 rounded-lg border border-grey'>
                        <Image source={{ uri: img }} className='rounded-md aspect-square h-12' style={{ resizeMode: 'contain' }} />
                    </View>
                </TouchableHighlight>
            </View>

            <View className='flex-2 justify-center'>
                <Text className='text-base text-black font-semibold truncate'>{name}</Text>
                <Text className='text-12 text-black truncate'>{brandName}</Text>
                <Text className='text-12 text-black truncate'>{STRINGS.rupeeSign}{unitPrice} | {unitQuantity}{unitType}</Text>
            </View>

            <View className='flex-1'>
                <Text className='text-base text-black font-bold truncate text-center mb-1'>{STRINGS.rupeeSign}{unitPrice * unitAdded}</Text>
                <View className='rounded-lg flex-row'>
                    <TouchableOpacity onPress={handleDecrementProductQuantity} className='flex-1 justify-center items-center rounded-l-lg'>
                        <Text className='text-lg bg-secondary text-white w-full text-center rounded-l-lg '>-</Text>
                    </TouchableOpacity>
                    <TextInput
                        keyboardType='numeric'
                        defaultValue={`${unitAdded}`}
                        className='bg-white text-center p-0 flex-2 '
                        onChangeText={(value) => handleEnterProductQuantity(value)}
                    />
                    <TouchableOpacity onPress={handleIncreementProductQuantity} className='flex-1 justify-center items-center rounded-r-lg'>
                        <Text className='text-lg bg-secondary text-white w-full text-center rounded-r-lg'>+</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}
