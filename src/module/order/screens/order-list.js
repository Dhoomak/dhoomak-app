import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

// components
import DhoomakFlatlist from '../../../common/components/dhoomak-flatlist';
import ProductDetailListCard from '../../home/components/product-detail-list-card';

// utils
import { getInventoryState } from '../../inventory/reducers/inventory-reducer';
import EditIcon from '../../home/components/edit-icon';
import { IonIcon } from '../../../utils/icons';
import COLORS from '../../../utils/color';
import useAppNavigation from '../../../common/hooks/use-app-navigation';

export default function OrderList() {
    const { inventoryItems, totalInventoryItems } = useSelector(getInventoryState);
    const [navigation, SCREEN] = useAppNavigation();


    const handleEdit = () => {
        navigation.replace(SCREEN.USER.INVENTORY_LIST, {
            isUpdating: true,

        });
    }
    return (
        <View className="flex-1 bg-grey" >
            <View className='flex-row gap-4 items-center px-3 py-2'>
                <Text className='flex-1 text-black text-base font-semibold'>{inventoryItems.length} Ordering Items</Text>
                {/*<View>
                    <TouchableOpacity className={`bg-white rounded-full mr-0 p-2`} onPress={handleEdit}>
                        <IonIcon name="create-outline" size={20} color={COLORS.black} />
                    </TouchableOpacity>
                </View>*/}
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
                        No Data Available
                    </Text>
                </View>
            )}
        </View>
    );
}
