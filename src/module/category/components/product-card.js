import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { addToInventory, getInventoryState, removeFromInventory } from '../../inventory/reducers/inventory-reducer';
import { useNavigation } from '@react-navigation/native';
import { USER } from '../../../utils/strings/screen-name';
import { PRODUCTS_DEFAULT_IMAGE } from '../../../data/constant';
import STRINGS from '../../../utils/strings';

export default function ProductCard(props) {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { inventoryAddedIdList } = useSelector(getInventoryState);

    const {
        item = {},
    } = props;

    const {
        _id = '',
        name = '',
        brandName = '',
        unitQuantity = '',
        unitType = '',
        unitPrice = '',
        unitAdded = 1,
        images: [img = PRODUCTS_DEFAULT_IMAGE] = [],
    } = item;

    const isProductAdded = inventoryAddedIdList.includes(_id);

    const handleToggleItem = (e) => {
        if (e) { e.preventDefault() };
        (!isProductAdded) ? handleAddToCart() : handleRemoveFromCart();
    }

    const handleAddToCart = () => {
        dispatch(addToInventory(item));
    }
    const handleRemoveFromCart = () => {
        dispatch(removeFromInventory(_id));
    }

    function viewItemDetails() {
        navigation.navigate(USER.ITEM_DETAIL, { item, _id })
    }

    return (
        <Pressable className='w-full h-full p-2 py-3' onPress={viewItemDetails}>
            <View className='w-full mb-2' >
                <Image source={{ uri: img }} className='w-full h-20' style={{ resizeMode: 'contain' }} />
            </View>
            <View className='w-full mb-6' >
                <Text className='text-10 text-black'>{brandName}</Text>
                <Text className='text-xs text-black'>{name}</Text>
            </View>
            <View className='w-full mb-2' >
                <Text className='text-10 text-black'>{unitQuantity}{unitType} quantity in Pack</Text>
            </View>
            <View className='flex flex-row '>
                <Text className='text-sm text-black font-bold flex-1'>₹{unitPrice}</Text>
                <TouchableOpacity className='bg-white rounded-sm px-2 shadow-md justify-center items-center' style={styles.shadow} onPress={handleToggleItem}>
                    <Text className={`text-10 font-semibold ${!isProductAdded ? 'text-secondary' : 'text-red'}`}>{!isProductAdded ? STRINGS.add : STRINGS.remove}</Text>
                </TouchableOpacity>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    shadow: {
        overflow: 'hidden',
        shadowColor: 'black',
        shadowRadius: 7,
        shadowOpacity: 1,
    },
})