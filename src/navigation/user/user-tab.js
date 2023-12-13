import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Screens
import { Home, Profile, Subscription } from '../../module/home/screens';

// Components
import UserIcon from '../../module/home/components/user-icon';

// Utilities
import COLORS from '../../utils/color';
import { USER } from '../../utils/strings/screen-name';

// Tab
const UserTab = createBottomTabNavigator();

function UserTabs() {
    return (
        <UserTab.Navigator
            // initialRouteName={USER.SUBSCRIPTION}
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary
                },
                tabBarActiveTintColor: COLORS.secondary,
                tabBarInactiveTintColor: COLORS.lightGrey,
            }}
        >
            <UserTab.Screen
                name={USER.HOME}
                component={Home}
                options={{
                    title: 'Home',
                    headerRight: () => <UserIcon />
                }}
            />
            <UserTab.Screen
                name={USER.PROFILE}
                component={Profile}
                options={{
                    title: 'Profile',
                }}
            />

            <UserTab.Screen
                name={USER.SUBSCRIPTION}
                component={Subscription}
                options={{
                    title: 'Subscription',
                }}
            />
        </UserTab.Navigator>
    );
}

export default UserTabs;