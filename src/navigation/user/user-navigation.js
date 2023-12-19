import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screen
import { Payment, Subscription } from '../../module/home/screens';
import { AddItems, CategoryList, ItemDetail, } from '../../module/category/screens'
import { InventoryList, } from '../../module/inventory/screens'

// Drawer
import UserDrawers from './user-drawer';

// Utilities
import { USER } from '../../utils/strings/screen-name';

// Stack
const UserStack = createNativeStackNavigator();

const UserScreens = () => {
    return (
        <UserStack.Navigator
            initialRouteName={USER.DRAWER}
        >
            <UserStack.Screen
                name={USER.DRAWER}
                component={UserDrawers}
                options={{ headerShown: false }}
            />
            <UserStack.Screen
                name={USER.ADD_ITEMS}
                component={AddItems}
                options={{
                    title: 'Create Your Inventory',
                }}
            />
            <UserStack.Screen
                name={USER.CATEGORY}
                component={CategoryList}
                options={{
                    title: 'Categories',
                }}
            />

            <UserStack.Screen
                name={USER.PAYMENT}
                component={Payment}
                options={{
                    title: 'Payment',
                }}
            />
            <UserStack.Screen
                name={USER.ITEM_DETAIL}
                component={ItemDetail}
                options={({ route }) => ({
                    title: route?.params?.item?.name ? `${route?.params?.item?.name} Details` : 'Product Details',
                })}
            />


            <UserStack.Screen
                name={USER.SUBSCRIPTION}
                component={Subscription}
                options={{
                    title: 'Subscription',
                }}
            />

            <UserStack.Screen
                name={USER.INVENTORY_LIST}
                component={InventoryList}
                options={{
                    title: 'Inventory List',
                }}
            />
        </UserStack.Navigator>
    );
};

export default UserScreens
/*
/
          options={({ route }) => ({
            title: 'Booking Details',
            headerShown: false,
          })}
*/ 