import React from 'react';
import { View, Text, Image, TouchableHighlight, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { PRODUCTS_DEFAULT_IMAGE, PRODUCT_UPDATION_TYPE } from '../../../data/constant';
import { USER } from '../../../utils/strings/screen-name';
import STRINGS from '../../../utils/strings';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons'
import { addProductInventoryUnits, removeProductInventoryUnits, enterProductInventoryUnits } from '../reducers/inventory-reducer';
import COLORS from '../../../utils/color';

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
        productUpdationType = PRODUCT_UPDATION_TYPE.SUBSCRIPTION,
        isUpdating = false,
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

    function handleEnterProductQuantity(value = 0) {
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

            <View className='flex-1 justify-center'>
                <Text className='text-base text-black font-semibold truncate'>{name}</Text>
                {brandName ? <Text className='text-12 text-black truncate'>{brandName}</Text> : <></>}
                {unitPrice ? <Text className='text-12 text-black truncate'>{STRINGS.rupeeSign}{unitPrice} | {unitQuantity}{unitType}</Text> : <></>}
            </View>

            <View className='justify-center'>
                <Text className='text-base text-black font-bold truncate text-center mb-1'>
                    {
                        unitPrice ? `${STRINGS.rupeeSign}${unitPrice * unitAdded}` : `${unitQuantity}${unitType}`
                    }
                </Text>
                {unitPrice ? <View className='rounded-lg flex-row'>
                    <TouchableOpacity onPress={handleDecrementProductQuantity} className=' justify-center items-center rounded-l-lg'>
                        <Text className='px-1 text-lg bg-secondary text-white w-full text-center rounded-l-lg '>
                            <Icon name='remove' size={14} color={COLORS.white} />
                        </Text>
                    </TouchableOpacity>
                    <TextInput
                        keyboardType='numeric'
                        defaultValue={`${unitAdded}`}
                        className='bg-grey text-center p-0 min-w-[40px] text-black'
                        onChangeText={(value) => handleEnterProductQuantity(value)}
                        placeholderTextColor={COLORS.lightGrey}
                    />
                    <TouchableOpacity onPress={handleIncreementProductQuantity} className=' justify-center items-center rounded-r-lg'>
                        <Text className='px-1 text-lg bg-secondary text-white w-full text-center rounded-r-lg'>
                            <Icon name='add' size={14} color={COLORS.white} />
                        </Text>

                    </TouchableOpacity>
                </View> : <></>
                }
            </View>

            <View className='justify-start items-center '>
                <TouchableOpacity className='p-1' onPress={() => handleEnterProductQuantity(0)}>
                    <Icon name='close' size={20} color={COLORS.lightGrey} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
