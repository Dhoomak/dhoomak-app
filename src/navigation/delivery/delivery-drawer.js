import { createDrawerNavigator } from '@react-navigation/drawer';

// Components
import UserIcon from '../../module/home/components/user-icon';

// Utils
import COLORS from '../../utils/color';
import { DELIVERY } from './../../utils/strings/screen-name';

// Tab
import DeliveryTabs from './delivery-tab';

// Drawer Config
const DeliveryDrawer = createDrawerNavigator();

function DeliveryDrawers() {
    return (
        <DeliveryDrawer.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary
                },
            }}
        >
            <DeliveryDrawer.Screen
                name={DELIVERY.TAB}
                component={DeliveryTabs}
                options={{
                    headerTitle: '',
                    title: 'Dashboard',
                    headerRight: () => <UserIcon className='mr-0' />
                }}
            />
        </DeliveryDrawer.Navigator>
    );
}
export default DeliveryDrawers;

