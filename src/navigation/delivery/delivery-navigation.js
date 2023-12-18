import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { Dashboard, DeliveryScreenListing } from '../../module/delivery/screens'

// Components
import UserIcon from '../../module/home/components/user-icon';

// Utilities
import { DELIVERY } from '../../utils/strings/screen-name';
import COLORS from '../../utils/color';
import DeliveryDetails from '../../module/delivery/screens/delievery-details';
import DeliveryDrawers from './delivery-drawer';

// Stack
const DeliveryStack = createNativeStackNavigator();

const DeliveryScreens = () => {
    return (
        <DeliveryStack.Navigator>
            <DeliveryStack.Screen
                name={DELIVERY.DASHBOARD}
                component={DeliveryDrawers}
                options={{
                    title: "Delivery Dashboard",
                    headerStyle: {
                        backgroundColor: COLORS.primary,
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
                    headerStyle: {
                        backgroundColor: COLORS.primary,
                    }
                }}
            />
            <DeliveryStack.Screen
                name={DELIVERY.DELIVERY_DETAILS}
                component={DeliveryDetails}
                options={{
                    title: "Delivery Items",
                    headerStyle: {
                        backgroundColor: COLORS.primary
                    }
                }}
            />
        </DeliveryStack.Navigator>
    );
};

export default DeliveryScreens