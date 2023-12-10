import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { Dashboard } from '../../module/delivery/screens'

// Components
import UserIcon from '../../module/home/components/user-icon';

// Utilities
import { DELIVERY } from '../../utils/strings/screen-name';
import COLORS from '../../utils/color';

// Stack
const DeliveryStack = createNativeStackNavigator();

const DeliveryScreens = () => {
    return (
        <DeliveryStack.Navigator>
            <DeliveryStack.Screen
                name={DELIVERY.DASHBOARD}
                component={Dashboard}
                options={{
                    title: "Delivery Dashboard",
                    headerStyle: {
                        backgroundColor: COLORS.primary
                    },
                    headerRight: () => <UserIcon />
                }}
            />
        </DeliveryStack.Navigator>
    );
};

export default DeliveryScreens