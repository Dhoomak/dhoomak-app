import React from 'react';
import {Text, View, KeyboardAvoidingView} from 'react-native';
import FilledButton from '../../../common/button';
import ProductCrudCard from '../components/product-crud-card';
import {useDispatch, useSelector} from 'react-redux';
import {getInventoryState} from '../reducers/inventory-reducer';
import DhoomakFlatlist from '../../../common/components/dhoomak-flatlist';
import {toast} from '../../../utils/toast';
import {useNavigation} from '@react-navigation/native';
import {USER} from '../../../utils/strings/screen-name';
import {
  getAsyncStorageItem,
  getAsyncStorageObjectItem,
} from '../../../utils/async-storage';
import {ASYNC_STORAGE_KEY, ROLE} from '../../../data/constant';
import useAppNavigation from '../../../common/hooks/use-app-navigation';
import {saveInventoryAction} from '../../home/thunks/subscription-thunk';

export default function InventoryList() {
  const [navigation, SCREEN] = useAppNavigation();
  const dispatch = useDispatch();
  const {inventoryItems, totalInventoryItems} = useSelector(getInventoryState);
  console.log(inventoryItems, 'inteventory items sending');
  const handleMakeSubscription = async () => {
    const userdata = await getAsyncStorageObjectItem(
      ASYNC_STORAGE_KEY.USER_DATA,
    );
    let payload;
    // console.log(userdata.userType);
    toast(JSON.stringify(inventoryItems));

    if (userdata.userType === ROLE.EXECUTIVE) {
      const restaurantUserId = await getAsyncStorageItem(
        ASYNC_STORAGE_KEY.USER_RESTAURANT_ID,
      );
      console.log('RESTAURANT ID BY EXECUTIVE :', restaurantUserId);
      payload = {
        products: inventoryItems,
        user: restaurantUserId,
      };
    } else {
      payload = {
        products: inventoryItems,
        user: userdata._id,
      };
    }

    // console.log("PAYLOAD:", payload)
    // dispatch(saveInventoryAction({ subscriptionData: payload, inventoryItems, navigation, SCREEN, userType: userdata.userType }));
    if (userdata.userType === ROLE.EXECUTIVE) {
      navigation.navigate(SCREEN.EXECUTIVE.THANK_YOU);
    } else {
      navigation.navigate(SCREEN.USER.SUBSCRIPTION, {inventoryItems});
    }
  };

  return (
    <KeyboardAvoidingView className="flex-1" behavior="height">
      <View className=" w-full flex-1 bg-grey">
        {totalInventoryItems >= 1 ? (
          <View className="rounded-md overflow-hidden flex-1 border border-grey m-3 mb-0">
            <DhoomakFlatlist
              data={inventoryItems}
              keyExtractor={item => item._id}
              className="rounded-md flex-1 bg-white overflow-hidden"
              renderItem={({item}) => <ProductCrudCard {...item} />}
              ItemSeparatorComponent={() => (
                <View className="bg-grey h-[2px]"></View>
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

        <View className="m-3">
          <FilledButton
            text="Add Items in Subscription"
            onPress={handleMakeSubscription}
            textProps={{className: 'text-black font-semibold'}}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
