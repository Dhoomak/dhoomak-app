import React from 'react';
import { View, Text } from 'react-native';
import STRINGS from '../../../utils/strings';

const HistoryDetailCard = (props) => {
    const {
        orderId = '',
        status = '',
        dateOfDelivery = '',
        timeOfDelivery = '',
        products = [],
        totalChargesWithExtraCharges = '',
        showFullDetails = true,
    } = props || {};

    return (
        <View>
            {/* ORDER ID */}
            <View className='mb-2'>
                <Text className='text-10'>Order Id: </Text>
                <Text className='text-base font-semibold text-black'>{orderId}</Text>
            </View>

            {/* STATUS, ITEMS */}
            <View className='flex-row mb-1 gap-x-2'>
                <View className='flex-1 flex-row gap-x-1'>
                    <Text className='text-12 text-black font-semibold'>
                        Status :
                    </Text>
                    <Text className='text-12 text-secondary'>
                        {status}
                    </Text>
                </View>
                <View className='flex-1 flex-row gap-x-1'>
                    <Text className='text-12 text-black font-semibold'>
                        Items :
                    </Text>
                    <Text className='text-12 text-black'>
                        {products.length}
                    </Text>
                </View>
            </View>
            {/* AMOUNT, TIME */}
            <View className='flex-row mb-1 gap-x-2'>
                <View className='flex-1 flex-row gap-x-1'>
                    <Text className='text-12 text-black font-semibold'>
                        Amount:
                    </Text>
                    <Text className='text-12 text-black'>
                        {STRINGS.rupeeSign} {totalChargesWithExtraCharges}
                    </Text>
                </View>
                <View className='flex-1 flex-row gap-x-1'>
                    <Text className='text-12 text-black font-semibold'>
                        Time:
                    </Text>
                    <Text className='text-12 text-black'>
                        {timeOfDelivery}
                    </Text>
                </View>
            </View>
            {/* DATE, VIEW FULL DETAILS */}
            <View className='flex-row gap-x-2'>
                <View className='flex-1 flex-row gap-x-1'>
                    <Text className='text-12 text-black font-semibold'>
                        Date:
                    </Text>
                    <Text className='text-12 text-black'>
                        {dateOfDelivery}
                    </Text>
                </View>
                {showFullDetails ?
                    (
                        <View className='flex-1 flex-row gap-x-1'>
                            <Text className='text-12 font-semibold'>
                                View Full Details...
                            </Text>
                        </View>
                    )
                    :
                    <></>
                }
            </View>
        </View>
    );
}

export default HistoryDetailCard;