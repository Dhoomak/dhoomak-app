import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/reducers/cart-slice';

export default function ProductCard(props) {
    const dispatch = useDispatch();

    const {
        item = {},
    } = props;

    const {
        id = '',
        name = '',
        brand = '',
        quantity = '',
        quantityType = '',
        price = '',
        img = '',
    } = item;


    function handleAddToCart() {
        dispatch(addToCart(item));
    }

    return (
        <View className='w-full h-full p-2 py-3'>
            <View className='w-full mb-2' >
                <Image source={{ uri: img }} className='w-full h-20' style={{ resizeMode: 'contain' }} />
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
                <TouchableOpacity className='bg-white rounded-sm px-3 shadow-md' style={styles.shadow} onPress={handleAddToCart}>
                    <Text className='text-10 text-secondary font-semibold'>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
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