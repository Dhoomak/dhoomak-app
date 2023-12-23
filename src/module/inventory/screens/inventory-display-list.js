import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

// components
import DhoomakFlatlist from '../../../common/components/dhoomak-flatlist';
import ProductDetailListCard from '../../home/components/product-detail-list-card';

// utils
import { getInventoryState } from '../reducers/inventory-reducer';


export default function InventoryDisplayList() {
    const { inventoryItems, totalInventoryItems } = useSelector(getInventoryState);

    return (
        <View className="flex-1 bg-white" >
            {totalInventoryItems >= 1 ? (
                <View className="rounded-md overflow-hidden flex-1 m-3">
                    <DhoomakFlatlist
                        data={inventoryItems}
                        keyExtractor={item => item._id}
                        className="rounded-md flex-1 bg-white"
                        renderItem={({ item }) => <ProductDetailListCard {...item} />}
                        ItemSeparatorComponent={() => (
                            <View style={{ borderBottomWidth: 1, marginVertical: 5 }} className="border-grey" />
                        )}
                    />
                </View>
            ) : (
                <View className="flex-1 justify-center items-center">
                    <Text className="italic text-red text-base">
                        No Item in the Inventory
                    </Text>
                </View>
            )}
        </View>
    );
}
