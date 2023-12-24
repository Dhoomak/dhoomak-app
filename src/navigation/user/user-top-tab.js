import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { USER } from '../../utils/strings/screen-name';
import { InventoryDisplayList } from '../../module/inventory/screens';
import store from '../../store/store';
import COLORS from '../../utils/color';
import { HistoryList } from '../../module/history/screens';

const UserTab = createMaterialTopTabNavigator();

function UserTobTabs() {
    return (
        <UserTab.Navigator
            initialRouteName={USER.INVENTORY_DISPLAY_LIST}
            screenOptions={{
                tabBarStyle: { backgroundColor: COLORS.primary },
                tabBarLabelStyle: { fontSize: 14, textTransform: 'capitalize', fontWeight: '600' },
                tabBarActiveTintColor: COLORS.black,
                tabBarInactiveTintColor: COLORS.black50,
                tabBarAndroidRipple: { color: COLORS.primaryLight, borderless: true },
                tabBarIndicatorStyle: { backgroundColor: COLORS.black }
            }}
        >
            <UserTab.Screen
                name={USER.INVENTORY_DISPLAY_LIST}
                component={InventoryDisplayList}
                options={{
                    title: 'Inventory'
                }}
            />
            <UserTab.Screen
                name={USER.ORDER}
                component={InventoryDisplayList}
                options={{
                    title: store.getState().subscription.subscriptionDetails.frequency ?? 'Next Order',
                }}
            />
            <UserTab.Screen
                name={USER.ORDER_HISTORY}
                component={HistoryList}
                options={{
                    title: 'History'
                }}
            />
        </UserTab.Navigator >
    );
}

export default UserTobTabs