import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

// Utils
import COLORS from '../../../utils/color';
import { USER } from '../../../utils/strings/screen-name';

// Data
import { PRODUCTS_DEFAULT_IMAGE, PRODUCT_UPDATION_TYPE } from '../../../data/constant';

export default function CategoryCard({ item }) {
    const navigation = useNavigation();
    const {
        name = '',
        images: [img = PRODUCTS_DEFAULT_IMAGE] = [],
        _id = '',
        productUpdationType = PRODUCT_UPDATION_TYPE.SUBSCRIPTION,
        isUpdating = false,
    } = item;

    function handleNavigation() {
        navigation.navigate(USER.CATEGORY, {
            selectedCategoryId: _id,
            productUpdationType,
            isUpdating,
        });
    }

    return (
        <TouchableOpacity activeOpacity={0.70} className='w-full' onPress={handleNavigation}>
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
