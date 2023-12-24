import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import { Dashboard, Profile, Notification } from '../../module/executive/screens';

// Components
import UserIcon from '../../module/home/components/user-icon';

// Utilities
import COLORS from '../../utils/color';
import { EXECUTIVE } from '../../utils/strings/screen-name';
import Icon from 'react-native-vector-icons/Ionicons';

// Tab
const ExecutiveTab = createBottomTabNavigator();

function ExecutiveTabs() {
    return (
        <ExecutiveTab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                headerStyle: {
                    backgroundColor: COLORS.primary
                },
                tabBarActiveTintColor: COLORS.bottomTabActive,
                tabBarInactiveTintColor: COLORS.bottomTabInactive,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === EXECUTIVE.DASHBOARD) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === EXECUTIVE.NOTIFICATION) {
                        iconName = focused ? 'notifications' : 'notifications-outline';
                    } else if (route.name === EXECUTIVE.PROFILE) {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    }

                    return <Icon name={iconName} size={28} color={color} />;
                },
            })}
            tabBarStyle={{ height: 100 }} // Adjust the height as needed
        >
            <ExecutiveTab.Screen
                name={EXECUTIVE.DASHBOARD}
                component={Dashboard}
                options={{
                    title: 'Dashboard',
                    headerRight: () => <UserIcon className='mr-4' />
                }}
            />

            <ExecutiveTab.Screen
                name={EXECUTIVE.NOTIFICATION}
                component={Notification}
                options={{
                    title: 'Notification',
                }}
            />

            <ExecutiveTab.Screen
                name={EXECUTIVE.PROFILE}
                component={Profile}
                options={{
                    title: 'Profile',
                }}
            />
        </ExecutiveTab.Navigator>

    );
}

export default ExecutiveTabs;