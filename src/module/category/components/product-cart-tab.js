import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { getInventoryState } from '../../inventory/reducers/inventory-reducer';

import IMAGES from '../../../assets/images';
import commonStyles from '../../../common/styles';
import { useNavigation } from '@react-navigation/native';
import { USER } from '../../../utils/strings/screen-name';
import { PRODUCT_UPDATION_TYPE } from '../../../data/constant';

export default function ProductCartTab(props) {
  const {
    productUpdationType = PRODUCT_UPDATION_TYPE.SUBSCRIPTION,
    isUpdating = false,
  } = props || {};


  const { totalInventoryItems, showProductInventoryTab } = useSelector(getInventoryState);
  const navigation = useNavigation();

  if (!showProductInventoryTab) {
    return <></>;
  }

  const handleNavigation = () => {
    navigation.navigate(USER.INVENTORY_LIST, { productUpdationType, isUpdating, });
  }

  return (
    <View className='w-full p-4 absolute bottom-0 left-0' >
      <View className='shadow-md bg-primary rounded-lg p-3 px-4 flex-row justify-between items-center' style={commonStyles.shadow}>
        <View>
          <Text className='text-black text-10'>Total Items in Inventory </Text>
          <Text className='text-black text-base font-bold'>{totalInventoryItems}</Text>
        </View>
        <TouchableOpacity className='flex flex-row gap-1 items-center' onPress={handleNavigation}>
          <Text className='text-black font-semibold'>View Inventory</Text>
          <Image source={IMAGES.dropdownIcon} className='w-4 h-4' />
        </TouchableOpacity>
      </View>
    </View>
  );
}
