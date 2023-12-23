import React from 'react'
import { View, Text } from 'react-native'
import { useDispatch } from 'react-redux';

// components
import FilledButton from '../../../common/button';

// utils
import { getAsyncStorageObjectItem } from '../../../utils/async-storage';
import { payNowAction } from '../thunks/payment-thunk';
import useAppNavigation from '../../../common/hooks/use-app-navigation';

// data
import { ASYNC_STORAGE_KEY } from '../../../data/constant';

const PayNowOptions = () => {
    const dispatch = useDispatch();
    const [navigation, SCREEN] = useAppNavigation();

    async function handlePayOnline() {
        const userdata = await getAsyncStorageObjectItem(
            ASYNC_STORAGE_KEY.USER_DATA,
        );
        const payload = {
            paymentOption: "PAY_NOW",
            isSubscriptionPaymentDone: true,
            user: userdata._id,
        }
        dispatch(payNowAction({ subscriptionData: payload, navigation, SCREEN, }))
    }

    return (
        <>
            <View className="flex-1 ">
                <View className="bg-dark-pink rounded-lg shadow-lg ">
                    <View className="p-4">
                        <View>
                            <View className="flex flex-row justify-between my-1 ">
                                <Text className="text-black text-sm font-medium">Subscription Amount</Text>
                                <Text className="text-black text-sm font-medium">819.18</Text>
                            </View>
                            <View className="flex flex-row justify-between my-1 ">
                                <Text className="text-black text-sm font-medium">GST</Text>
                                <Text className="text-black text-sm font-medium">179.82</Text>
                            </View>
                        </View>
                        <View className="h-[1px] bg-gray-800 my-2" />
                        <View className="flex flex-row justify-between my-1 ">
                            <Text className="text-black text-sm font-medium">Total Amount</Text>
                            <Text className="text-black text-sm font-medium">999.00</Text>
                        </View>
                    </View>
                </View>

            </View>
            <FilledButton
                text='Pay Now'
                onPress={handlePayOnline}
            />
        </>
    )
}

export default PayNowOptions