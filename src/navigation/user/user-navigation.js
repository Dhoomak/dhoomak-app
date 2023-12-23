import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screen
import { Subscription } from '../../module/home/screens';
import { PaymentDoneModal, PaymentFailModal, PaymentOptions } from '../../module/payment/screens';

// Screens
import { AddItems, CategoryList, ItemDetail, } from '../../module/category/screens'
import { InventoryList, InventoryDisplayList } from '../../module/inventory/screens'

// Drawer
import UserDrawers from './user-drawer';

// Utilities
import { USER } from '../../utils/strings/screen-name';
import EditIcon from '../../module/home/components/edit-icon';

// Stack
const UserStack = createNativeStackNavigator();

const UserScreens = () => {
    return (
        <UserStack.Navigator
            initialRouteName={USER.DRAWER}
        // initialRouteName={USER.PAYMENT_FAIL}
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
                component={PaymentOptions}
                options={{
                    title: 'Payment Options',
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
            <UserStack.Screen
                name={USER.INVENTORY_DISPLAY_LIST}
                component={InventoryDisplayList}
                options={{
                    title: 'Your Inventory',
                    headerRight: () => <EditIcon className='mr-0 bg-primary' />
                }}
            />
            <UserStack.Screen
                name={USER.PAYMENT_DONE}
                component={PaymentDoneModal}
                options={{
                    headerShown: false,
                }}
            />
            <UserStack.Screen
                name={USER.PAYMENT_FAIL}
                component={PaymentFailModal}
                options={{
                    headerShown: false,
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