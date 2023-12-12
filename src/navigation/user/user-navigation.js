import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { AddItems, CategoryList } from '../../module/home/screens';
import UserTabs from './user-tab';

// Utilities
import COLORS from '../../utils/color';
import { USER } from '../../utils/strings/screen-name';

// Stack
const UserStack = createNativeStackNavigator();

const UserScreens = () => {
    return (
        <UserStack.Navigator>
            <UserStack.Screen
                name={USER.TAB}
                component={UserTabs}
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
        </UserStack.Navigator>
    );
};

export default UserScreens