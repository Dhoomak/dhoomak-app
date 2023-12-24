import React, { memo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import IMAGES from '../../../assets/images';
import commonStyles from '../../../common/styles';
import { useNavigation } from '@react-navigation/native';
import { USER } from '../../../utils/strings/screen-name';
import { useSelector } from 'react-redux';
import { getSubscriptionState } from '../reducers/subscription-reducer';

function HomeHeader() {
    const navigation = useNavigation();
    const {
        isSubscriptionCreated = false,
        isSubscriptionPaymentDone = false,
        subscriptionDetails: { products = [] } = {}
    } = useSelector(getSubscriptionState);

    function handleNavigateToCreateInventory() {
        navigation.navigate(USER.ADD_ITEMS)
    }

    function handleNavigateToPayment() {
        navigation.navigate(USER.PAYMENT, { inventoryItems: products });
    }

    function handleNavigateToOrder() {
        navigation.navigate(USER.TOP_TAB, { screen: USER.ORDER });
    }

    return (
        <View className='w-full bg-white px-3 py-2 flex-row '>
            <View className='flex-1'>
                {/* IF INVENTORY NOT CREATED */}
                {
                    (!isSubscriptionCreated && !isSubscriptionPaymentDone) ?
                        (<View className='justify-center flex flex-1 items-start'>
                            <Text className='font-semibold text-base text-black mb-2'>Hi, User!!!</Text>
                            <TouchableOpacity className='bg-secondary rounded-md px-2 py-1 shadow-md mb-2 border-white border' style={commonStyles.shadow} onPress={handleNavigateToCreateInventory}>
                                <Text className='text-sm text-white font-semibold'>Create Inventory</Text>
                            </TouchableOpacity>
                        </View>)
                        :
                        (<></>)
                }


                {/* IF USER NOT SUBSCRIBED */}
                {
                    (isSubscriptionCreated && !isSubscriptionPaymentDone) ?
                        (<View className='justify-center flex flex-1 items-start'>
                            <Text className='font-semibold text-base text-black mb-2'>Start Your Delivery</Text>
                            <TouchableOpacity className='bg-secondary rounded-md px-2 py-1 shadow-md mb-2 border-white border' style={commonStyles.shadow} onPress={handleNavigateToPayment}>
                                <Text className='text-sm text-white font-semibold'>Subscribe Now</Text>
                            </TouchableOpacity>
                        </View>)
                        :
                        (<></>)
                }

                {/* IF ORDER SCHEDULED */}
                {
                    (isSubscriptionCreated && isSubscriptionPaymentDone) ?
                        (<View className='justify-center flex flex-1 items-start'>
                            <Text className='font-semibold text-base text-black mb-2'>Pay for Next Order</Text>
                            <TouchableOpacity className='bg-secondary rounded-md px-2 py-1 shadow-md mb-2 border-white border' style={commonStyles.shadow} onPress={handleNavigateToOrder}>
                                <Text className='text-sm text-white font-semibold'>Pay Now</Text>
                            </TouchableOpacity>
                        </View>)
                        :
                        (<></>)
                }
            </View>
            <View className='w-[0.5px] h-full bg-secondary mx-1' />
            <View className='flex-1 p-2'>
                <Image source={IMAGES.groceryBasketImg} className='w-full h-24' resizeMode={'contain'} />
            </View>
        </View>
    );
}

export default HomeHeader;