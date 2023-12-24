import React from 'react';
import { View, Text } from 'react-native';
import DhoomakScrollView from '../../../common/components/dhoomak-scrollview';
import HistoryDetailCard from '../components/history-detail-card';
import DhoomakFlatlist from '../../../common/components/dhoomak-flatlist';
import ProductDetailListCard from '../../home/components/product-detail-list-card';
import COLORS from '../../../utils/color';
import AddCustomItemForm from '../../category/components/add-custom-item-form';
import AddressDisplayCard from '../components/address-display-card';
import STRINGS from '../../../utils/strings';

const OrderHistoryDetails = ({ route }) => {
    const {
        historyDetails = {},
    } = route.params;

    const {
        // orderId = '',
        // status = '',
        // dateOfDelivery = '',
        // timeOfDelivery = '',
        // paymentMode = '',
        paymentThrough = '',
        paymentBy = '',
        products = [],
        // totalCharges = '',
        // gstCharges = '',
        // razorPayCharges = '',
        totalChargesWithExtraCharges = '',
        deliveryDetails = {},
    } = historyDetails;

    // const {
    //     name = '',
    //     address = '',
    //     phone = ''
    // } = deliveryDetails;

    return (
        <DhoomakScrollView className='bg-white flex-1'>
            <View className='bg-grey p-3'>
                <View className='bg-white rounded-lg p-3'>
                    <View className='bg-white rounded-lg mb-2'>
                        <HistoryDetailCard {...historyDetails} showFullDetails={false} />
                    </View>
                    <Text className='text-black text-12'>Paid by {paymentBy}through {paymentThrough}</Text>
                </View>
            </View>
            <View className='p-3'>
                {products.length > 0 ? (<Text className='mb-3 text-black text-base font-bold'>{products.length} Items in this order</Text>) : <></>}
                <DhoomakFlatlist
                    nestedScrollEnabled
                    data={products}
                    keyExtractor={item => item._id}
                    className="rounded-md flex-1 bg-white"
                    renderItem={({ item }) => <ProductDetailListCard {...item} />}
                    ItemSeparatorComponent={() => <View style={{ width: '100%', height: 1, backgroundColor: COLORS.darkGrey, marginVertical: 7 }}></View>}
                />
            </View>
            <View className='bg-grey p-3 px-5'>
                <Text className='text-black mb-2 text-sm font-bold'>Order Details</Text>
                <View className='flex-row mb-1 '>
                    <View className='flex-6'>
                        <Text className='text-12 text-black font-semibold'>
                            Total Amount:
                        </Text>
                    </View>
                    <View className='flex-4'>
                        <Text className='text-12 text-black font-semibold text-right w-full'>
                            {STRINGS.rupeeSign} {totalChargesWithExtraCharges}
                        </Text>
                    </View>
                </View>
                <View className='flex-row mb-1 '>
                    <View className='flex-6'>
                        <Text className='text-12 text-black font-semibold'>
                            GST:
                        </Text>
                    </View>
                    <View className='flex-4'>
                        <Text className='text-12 text-black font-semibold text-right w-full'>
                            {STRINGS.rupeeSign} {totalChargesWithExtraCharges}
                        </Text>
                    </View>
                </View>
                <View className='flex-row mb-1 '>
                    <View className='flex-6'>
                        <Text className='text-12 text-black font-semibold'>
                            Razor Pay Charges:
                        </Text>
                    </View>
                    <View className='flex-4'>
                        <Text className='text-12 text-black font-semibold text-right w-full'>
                            {STRINGS.rupeeSign} {totalChargesWithExtraCharges}
                        </Text>
                    </View>
                </View>
                <View className='my-1 w-full h-[1px] bg-black' />
                <View className='flex-row mb-1 '>
                    <View className='flex-6'>
                        <Text className='text-12 text-black font-semibold'>
                            Amount Paid:
                        </Text>
                    </View>
                    <View className='flex-4'>
                        <Text className='text-12 text-black font-semibold text-right w-full'>
                            {STRINGS.rupeeSign} {totalChargesWithExtraCharges}
                        </Text>
                    </View>
                </View>
            </View>
            <View className='bg-grey p-3'>
                <AddressDisplayCard {...deliveryDetails} />
            </View>
        </DhoomakScrollView>
    );
}

export default OrderHistoryDetails;
