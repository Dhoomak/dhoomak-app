import React from 'react';
import { Text, View, KeyboardAvoidingView } from 'react-native';
import FilledButton from '../../../common/button';
import ProductCrudCard from '../components/product-crud-card';
import { useSelector } from 'react-redux';
import { getInventoryState } from '../reducers/inventory-reducer';
import DhoomakFlatlist from '../../../common/components/dhoomak-flatlist';
import { toast } from '../../../utils/toast';
import { useNavigation } from '@react-navigation/native';
import { USER } from '../../../utils/strings/screen-name';

export default function InventoryList() {
    const navigation = useNavigation();
    const { inventoryItems, totalInventoryItems } = useSelector(getInventoryState)

    const handleMakeSubscription = () => {
        // toast(JSON.stringify(inventoryItems));
        navigation.navigate(USER.SUBSCRIPTION, { inventoryItems });
    };

    return (
        <KeyboardAvoidingView className='flex-1' behavior='height'>
            <View className=' w-full flex-1 bg-magnolia'>

                {
                    totalInventoryItems >= 1 ? (
                        <DhoomakFlatlist
                            data={inventoryItems}
                            keyExtractor={item => item._id}
                            className=' m-3 mb-0  rounded-md flex-1 '
                            renderItem={({ item }) => <ProductCrudCard {...item} />}
                            ItemSeparatorComponent={() => <View className='bg-grey h-[1px]'></View>}
                        />
                    ) : (
                        <View className='flex-1 justify-center items-center'>
                            <Text className='italic text-red text-base'>No Item in the Inventory</Text>
                        </View>
                    )
                }

                <View className='p-3'>
                    <FilledButton text='Create Subscription' onPress={handleMakeSubscription} />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}
