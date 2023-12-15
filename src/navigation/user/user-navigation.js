import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screen
import { AddItems, CategoryList, Payment } from '../../module/home/screens';

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
                name={USER.ADDITEMS}
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
        </UserStack.Navigator>
    );
};

export default UserScreens