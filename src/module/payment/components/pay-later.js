import React, { Fragment } from 'react'
import { View, Text, ScrollView } from 'react-native'
import FilledButton from '../../../common/button';
import { toast } from '../../../utils/toast';
import IonIcon from 'react-native-vector-icons/Ionicons'
import COLORS from '../../../utils/color';
import { useDispatch } from 'react-redux';
import { payLaterAction } from '../thunks/payment-thunk';
import useAppNavigation from '../../../common/hooks/use-app-navigation';
import { getAsyncStorageObjectItem } from '../../../utils/async-storage';
import { ASYNC_STORAGE_KEY } from '../../../data/constant';

const payLaterCondition = [
    {
        icon: 'checkmark-circle-outline',
        desc: 'While paying offline, you need to pay the amount to our Sales Agent.',
    },
    {
        icon: 'checkmark-circle-outline',
        desc: 'While paying offline, your subscription fees will be charged in your first billing of purchase',
    },
    {
        icon: 'checkmark-circle-outline',
        desc: 'While paying offline, you need to pay the amount to our Sales Agent.',
    },
    {
        icon: 'checkmark-circle-outline',
        desc: 'While paying offline, your subscription fees will be charged in your first billing of purchase',
    },
    {
        icon: 'checkmark-circle-outline',
        desc: 'While paying offline, you need to pay the amount to our Sales Agent.',
    },
    {
        icon: 'checkmark-circle-outline',
        desc: 'While paying offline, your subscription fees will be charged in your first billing of purchase',
    },

]


const PayLaterOption = () => {
    const dispatch = useDispatch();
    const [navigation, SCREEN] = useAppNavigation();

    async function handlePayLater() {
        const userdata = await getAsyncStorageObjectItem(
            ASYNC_STORAGE_KEY.USER_DATA,
        );
        const payload = {
            paymentOption: "PAY_LATER",
            isSubscriptionPaymentDone: true,
            user: userdata._id,
        }
        dispatch(payLaterAction({ subscriptionData: payload, navigation, SCREEN, }))
    }

    return (
        <>
            <View className="flex-1 ">
                <ScrollView className='flex-1'>
                    {
                        payLaterCondition.map((condition, ind) => (
                            <Fragment key={ind}>
                                <View className='flex flex-row mb-2 gap-x-2 items-center'>
                                    <IonIcon name={condition.icon} size={20} color={COLORS.secondary} />
                                    <Text className='text-xs text-black'>{condition.desc}</Text>
                                </View>
                            </Fragment>
                        ))
                    }
                </ScrollView>

            </View>
            <FilledButton
                text='Pay Later'
                onPress={handlePayLater}
            />
        </>
    )
}

export default PayLaterOption