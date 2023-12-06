import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Home from '../../module/home/screens/home';
import AddItems from '../../module/category/screens/add-items';
import CategoryList from '../../module/category/screens/category-list';

// Components
import UserIcon from '../../module/home/components/user-icon';

// Utilities
import COLORS from '../../utils/color';
import { USER } from '../../utils/strings/screen-name';

// Stack
const UserStack = createNativeStackNavigator();

const UserScreens = () => {
    return (
        <UserStack.Navigator>
            <UserStack.Screen
                name={USER.HOME}
                component={Home}
                options={{
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: COLORS.primary
                    },
                    headerRight: () => <UserIcon />
                }}
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