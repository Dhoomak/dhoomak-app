import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddItems, CategoryList, Payment } from '../../module/home/screens';
import UserTabs from './user-tab';
import COLORS from '../../utils/color';
import { USER } from '../../utils/strings/screen-name';
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

            <UserStack.Screen
                name={USER.PAYMENT}
                component={Payment}
                options={{
                    title: 'Payment',
                    headerShown:false
                }}
            />
        </UserStack.Navigator>
    );
};

export default UserScreens