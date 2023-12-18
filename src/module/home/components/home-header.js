import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import IMAGES from '../../../assets/images';
import commonStyles from '../../../common/styles';
import { useNavigation } from '@react-navigation/native';
import { USER } from '../../../utils/strings/screen-name';

export default function HomeHeader() {
    const navigation = useNavigation();

    function handleNavigateToCreateInventory() {
        navigation.navigate(USER.ADD_ITEMS)
    }
    function handleNavigateToBuySubscription() {
        navigation.navigate(USER.SUBSCRIPTION)
    }

    return (
        <View className='w-full bg-white px-3 py-2 flex-row '>
            <View className='flex-1'>
                {/* IF ORDER SCHEDULED */}
                {/* <View className='justify-center flex flex-1 items-start'>
                    <Text className='font-semibold text-sm text-red mb-2'>Next Order Scheduled</Text>
                    <TouchableOpacity className='bg-secondary rounded-md px-2 py-1 shadow-md mb-2 border-white border' style={styles.shadow}>
                        <Text className='text-sm text-white font-semibold'>31 Dec 2023</Text>
                    </TouchableOpacity>
                    <Text className='font-semibold text-xs'>10:30 AM | Tuesday </Text>
                </View> */}

                {/* IF INVENTORY NOT CREATED */}
                <View className='justify-center flex flex-1 items-start'>
                    <Text className='font-semibold text-sm text-red mb-2'>Hi, User!!!</Text>
                    <TouchableOpacity className='bg-secondary rounded-md px-2 py-1 shadow-md mb-2 border-white border' style={commonStyles.shadow} onPress={handleNavigateToCreateInventory}>
                        <Text className='text-sm text-white font-semibold'>Create Your Inventory</Text>
                    </TouchableOpacity>
                </View>

                {/* IF USER NOT SUBSCRIBED */}
                {/* <View className='justify-center flex flex-1 items-start'>
                    <Text className='font-semibold text-sm text-red mb-2'>Hi, User!!!</Text>
                    <TouchableOpacity className='bg-secondary rounded-md px-2 py-1 shadow-md mb-2 border-white border' style={commonStyles.shadow} onPress={handleNavigateToBuySubscription}>
                        <Text className='text-sm text-white font-semibold'>Buy Subscription</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
            <View className='w-0.5 h-full bg-secondary mx-1' />
            <View className='flex-1 p-2'>
                <Image source={IMAGES.groceryBasketImg} className='w-full h-24' resizeMode={'contain'} />
            </View>
        </View>
    );
}
