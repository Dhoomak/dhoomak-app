import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import IMAGES from '../../../assets/images';
import { SUBSCRIPTION_PAYMENT_TYPE } from '../../../data/constant';
import FilledButton from '../../../common/button';
import { toast } from '../../../utils/toast';
import IonIcon from 'react-native-vector-icons/Ionicons'
import COLORS from '../../../utils/color';
// import { ScrollView } from 'react-native-gesture-handler';

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


const Payment = () => {

    const [selectedPaymentOption, setSelectedPaymentOption] = useState(SUBSCRIPTION_PAYMENT_TYPE[0].value);

    function handleSelectPaymentOption(type) {
        setSelectedPaymentOption(() => type)
    }

    function handlePayOnline() {
        toast("Pay Online is Temporarily not working.");
    }
    function handlePayLater() {
        toast("Pay Later");
    }

    return (
        <View className="bg-white flex-1 ">
            <View className="m-4 mb-0">
                {/* <Text className="text-xl text-black font-bold mb-4">Payment Options</Text> */}
                <View className="flex flex-row">
                    <View className="flex flex-row gap-3">
                        {
                            SUBSCRIPTION_PAYMENT_TYPE.map((type) => (
                                <TouchableOpacity onPress={() => handleSelectPaymentOption(type.value)} className="flex item-center text-center">
                                    <Text className={` border py-1 px-3 text-base font-semibold rounded ${selectedPaymentOption === type.value ? 'bg-primary border-primary text-black' : 'text-green bg-white border-green'}`}>{type.title}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </View>
            </View>

            <View className="flex-1 flex-col gap-y-2 m-4">
                <Text className="py-1 text-sm text-black font-semibold mb-3">For safe payment, pay using net banking</Text>
                {
                    selectedPaymentOption === SUBSCRIPTION_PAYMENT_TYPE[0].value ?
                        // Code of Pay ONLINE 
                        // TODO: Make it a seprate component
                        (<>
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
                        :
                        // Code of Pay later
                        // TODO: Make it a seprate component
                        (<>
                            <View className="flex-1 ">

                                <ScrollView className='flex-1'>
                                    {
                                        payLaterCondition.map((condition) => (
                                            <>
                                                <View className='flex flex-row mb-2 gap-x-2 items-center'>
                                                    <IonIcon name={condition.icon} size={20} color={COLORS.secondary} />
                                                    <Text className='text-xs text-black'>{condition.desc}</Text>
                                                </View>
                                            </>
                                        ))
                                    }
                                </ScrollView>

                            </View>
                            <FilledButton
                                text='Pay Later'
                                onPress={handlePayLater}
                            />
                        </>)
                }
            </View>
            {/* FOOTER */}
            <View className="bg-dark-pink rounded-t-lg">
                <View className="m-4">
                    <View className="flex flex-row justify-between align-middle text-center ">
                        <Text className="text-black text-center w-full text-xs">We have served  1 lac+ happy customers across India</Text>
                    </View>
                </View>
            </View>
        </View >
    )
}

export default Payment