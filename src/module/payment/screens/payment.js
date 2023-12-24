import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { SUBSCRIPTION_PAYMENT_TYPE } from '../../../data/constant';
import PayLaterOption from '../components/pay-later';
import PayNowOptions from '../components/pay-now';

const Payment = (route) => {
    const {
        defaultSelectedPaymentOptionIndex = 0,
        paymentTypes = SUBSCRIPTION_PAYMENT_TYPE,
    } = route.params || {};


    const [selectedPaymentOption, setSelectedPaymentOption] = useState(SUBSCRIPTION_PAYMENT_TYPE[defaultSelectedPaymentOptionIndex].value);

    function handleSelectPaymentOption(type) {
        setSelectedPaymentOption(() => type)
    }

    return (
        <View className="bg-white flex-1 ">
            <View className="m-4 mb-0">
                <View className="flex flex-row">
                    <View className="flex flex-row gap-3">
                        {
                            paymentTypes.map((type) => (
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
                    selectedPaymentOption === SUBSCRIPTION_PAYMENT_TYPE[0].value ? <PayNowOptions /> : <PayLaterOption />
                }
            </View>
            {/* FOOTER */}
            <View className="bg-grey rounded-t-lg p-4">
                <Text className="text-black text-center text-xs">We have served  1 lac+ happy customers across India</Text>
            </View>
        </View >
    )
}

export default Payment