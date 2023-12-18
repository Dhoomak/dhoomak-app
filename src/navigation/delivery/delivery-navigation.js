import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { DeliveryScreenListing, DeliveryDetails } from '../../module/delivery/screens'

// Components
import UserIcon from '../../module/home/components/user-icon';

// Utilities
import { DELIVERY } from '../../utils/strings/screen-name';
import COLORS from '../../utils/color';

// Drawer
import DeliveryDrawers from './delivery-drawer';

// Stack
const DeliveryStack = createNativeStackNavigator();

const DeliveryScreens = () => {
    return (
        <DeliveryStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary,
                }
            }}

        >
            <DeliveryStack.Screen
                name={DELIVERY.DASHBOARD}
                component={DeliveryDrawers}
                options={{
                    title: "Delivery Dashboard",
                    headerShown: false,
                    headerStyle: {
                        headerVisible: false,
                    },
                    headerRight: () => <UserIcon />
                }}
            />

            <DeliveryStack.Screen
                name={DELIVERY.DELIVERY_ITEMS}
                component={DeliveryScreenListing}
                options={{
                    title: "Delivery Items",
                }}
            />

            <DeliveryStack.Screen
                name={DELIVERY.DELIVERY_DETAILS}
                component={DeliveryDetails}
                options={{
                    title: "Delivery Items",
                }}
            />
        </DeliveryStack.Navigator>
    );
};

export default DeliveryScreens