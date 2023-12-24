import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Screens
import { Dashboard, DeliveryProfile } from '../../module/delivery/screens';

// Components
import UserIcon from '../../module/home/components/user-icon';

// Utilities
import COLORS from '../../utils/color';
import { DELIVERY, EXECUTIVE } from '../../utils/strings/screen-name';

// Tab
const DeliveryTab = createBottomTabNavigator(); // Renamed the function component

function DeliveryTabs() {
    return (
        <DeliveryTab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                headerStyle: {
                    backgroundColor: COLORS.primary,
                    headerVisible: false,
                },
                tabBarActiveTintColor: COLORS.bottomTabActive,
                tabBarInactiveTintColor: COLORS.bottomTabInactive,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === DELIVERY.DASHBOARD) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === EXECUTIVE.NOTIFICATION) {
                        iconName = focused ? 'notifications' : 'notifications-outline';
                    } else if (route.name === DELIVERY.PROFILE) {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    }

                    return <Icon name={iconName} size={28} color={color} />;
                },
            })}
            tabBarStyle={{ height: 100 }} // Adjust the height as needed
        >
            <DeliveryTab.Screen
                name={DELIVERY.DASHBOARD}
                component={Dashboard}
                options={{
                    title: 'Dashboard',
                    headerRight: () => <UserIcon className='mr-4' />,
                }}
            />
            <DeliveryTab.Screen
                name={DELIVERY.PROFILE}
                component={DeliveryProfile}
                options={{
                    title: 'Profile',
                    headerRight: () => <UserIcon className='mr-4' />,
                }}
            />

            {/* <CustomDeliveryTabs.Screen
                name={EXECUTIVE.NOTIFICATION}
                component={Notification}
                options={{
                    title: 'Notification',
                }}
            />

            <CustomDeliveryTabs.Screen
                name={EXECUTIVE.PROFILE}
                component={Profile}
                options={{
                    title: 'Profile',
                }}
            /> */}
        </DeliveryTab.Navigator>
    );
}

export default DeliveryTabs;
