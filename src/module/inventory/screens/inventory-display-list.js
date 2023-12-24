import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

// components
import DhoomakFlatlist from '../../../common/components/dhoomak-flatlist';
import ProductDetailListCard from '../../home/components/product-detail-list-card';

// utils
import { getInventoryState } from '../reducers/inventory-reducer';
import EditIcon from '../../home/components/edit-icon';

export default function InventoryDisplayList() {
    const { inventoryItems, totalInventoryItems } = useSelector(getInventoryState);

    return (
        <View className="flex-1 bg-grey" >
            <View className='flex-row gap-4 items-center px-3 py-2'>
                <Text className='flex-1 text-black text-base font-semibold'>{inventoryItems.length} Items in Inventory</Text>
                <View>
                    <EditIcon />
                </View>
            </View>
            {totalInventoryItems >= 1 ? (
                <View className="rounded-lg overflow-hidden flex-1 m-3 mt-0 p-2 bg-white">
                    <DhoomakFlatlist
                        data={inventoryItems}
                        keyExtractor={item => item._id}
                        className="flex-1"
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
