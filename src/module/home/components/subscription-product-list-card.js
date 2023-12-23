import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import commonStyles from '../../../common/styles';
import DhoomakFlatlist from '../../../common/components/dhoomak-flatlist';
import ProductDetailListCard from './product-detail-list-card';
import COLORS from '../../../utils/color';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import { USER } from '../../../utils/strings/screen-name';

export default function SubscriptionProductListCard({ inventoryItems }) {
    const navigation = useNavigation();

    const [showFullList, setShowFullList] = useState(true);

    const inventoryListLength = inventoryItems.length;

    const toggleFullList = () => {
        setShowFullList((prev) => !prev);
    }

    const handleEdit = () => {
        navigation.navigate(USER.CATEGORY);
    }

    return (
        <View className="px-4 py-4 bg-white rounded-xl shadow-sm " style={commonStyles.shadow}>
            <View className="flex flex-row items-center mb-2">
                <View className="flex-1 flex flex-col justify-between ">
                    <Text className="text-lg text-black font-bold">Total Items</Text>
                    <Text className="text-sm text-black ">{inventoryItems.length} Items Selected</Text>
                </View>
                <View className="flex flex-row items-center gap-2">
                    <TouchableOpacity onPress={handleEdit}>
                        <Icon name="create-outline" size={24} color={COLORS.black} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ height: showFullList ? 200 : 'auto' }}>
                <DhoomakFlatlist
                    nestedScrollEnabled
                    data={inventoryItems}
                    renderItem={({ item }) => <ProductDetailListCard {...item} />}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={
                        () => <View style={{ borderBottomWidth: 1, marginVertical: 5 }} className="border-grey" />
                    }
                />
            </View>
            {inventoryListLength > 3 ? (<TouchableOpacity className='p-2 pb-0 justify-between items-center flex-row' onPress={toggleFullList}>
                <Text className='text-black font-semibold text-base'>{showFullList ? 'View More' : 'View Less'}</Text>
                <Icon name={showFullList ? "chevron-down-circle-outline" : "chevron-up-circle-outline"} size={24} color={COLORS.secondary} />
            </TouchableOpacity>) : (<></>)}
        </View>
    );
}
