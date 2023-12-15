import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screen
import { AddItems, CategoryList, ItemDetail, Payment } from '../../module/home/screens';

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
                options={{
                    title: '{ItemName} Details ',
                }}
            />
        </UserStack.Navigator>
    );
};

export default UserScreens