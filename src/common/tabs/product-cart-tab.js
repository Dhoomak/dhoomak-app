import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { getCartState } from '../../store/reducers/cart-slice';
import IMAGES from '../../assets/images';
import commonStyles from '../styles';

export default function ProductCartTab() {
  const { showProductCartTab, totalCartItems } = useSelector(getCartState);

  if (!showProductCartTab) {
    return <></>;
  }

  return (
    <View className='w-full p-4 absolute bottom-0 left-0' >
      <View className='shadow-md bg-primary rounded-lg p-3 px-4 flex-row justify-between items-center' style={commonStyles.shadow}>
        <View>
          <Text className='text-black text-10'>Total Items in Cart </Text>
          <Text className='text-black text-base font-bold'>{totalCartItems}</Text>
        </View>
        <TouchableOpacity className='flex flex-row gap-1 items-center'>
          <Text className='text-black font-semibold'>View Inventory</Text>
          <Image source={IMAGES.dropdownIcon} className='w-4 h-4' />
        </TouchableOpacity>
      </View>
    </View>
  );
}
