import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import IonIcon from 'react-native-vector-icons/Ionicons'

// Screens
import { InventoryDisplayList } from '../../module/inventory/screens';
import { HistoryList } from '../../module/history/screens';

// Utils
import { USER } from '../../utils/strings/screen-name';
import COLORS from '../../utils/color';

// Store
import store from '../../store/store';
import OrderList from '../../module/order/screens';

// TobTab
const UserTopTab = createMaterialTopTabNavigator();

function UserTobTabs() {
    return (
        <UserTopTab.Navigator
            initialRouteName={USER.INVENTORY_DISPLAY_LIST}
            screenOptions={({ route }) => ({
                tabBarStyle: { backgroundColor: COLORS.primary },
                tabBarLabelStyle: { fontSize: 14, textTransform: 'capitalize', fontWeight: '600' },
                tabBarActiveTintColor: COLORS.black,
                tabBarInactiveTintColor: COLORS.black50,
                tabBarAndroidRipple: { color: COLORS.primaryLight, borderless: true },
                tabBarIndicatorStyle: { backgroundColor: COLORS.black },
                // tabBarIcon: ({ focused, color, size }) => {
                //     let iconName;
                //     if (route.name === USER.ORDER) {
                //         iconName = focused ? 'home' : 'home-outline';
                //     }
                //     return <IonIcon name={iconName} size={12} color={color} />;
                // },
            })}

        >
            <UserTopTab.Screen
                name={USER.INVENTORY_DISPLAY_LIST}
                component={InventoryDisplayList}
                options={{
                    title: 'Inventory'
                }}
            />
            <UserTopTab.Screen
                name={USER.ORDER}
                component={OrderList}
                options={{
                    title: store.getState().subscription.subscriptionDetails.frequency ?? 'Next Order',
                }}
            />
            <UserTopTab.Screen
                name={USER.ORDER_HISTORY}
                component={HistoryList}
                options={{
                    title: 'History'
                }}
            />
        </UserTopTab.Navigator >
    );
}

export default UserTobTabs