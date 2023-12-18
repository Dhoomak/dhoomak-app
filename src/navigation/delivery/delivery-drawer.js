import { createDrawerNavigator } from '@react-navigation/drawer';
import UserIcon from '../../module/home/components/user-icon';
import { DELIVERY } from './../../utils/strings/screen-name';
import COLORS from '../../utils/color';
import DeliveryTabs from './delivery-tab';

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
                    // headerTitle: '',
                    title: 'Dashboard',
                    headerVisible: false,
                    headerLeftLabelVisible: false,
                    headerRight: () => <UserIcon className='mr-0' />
                }}
            />
        </DeliveryDrawer.Navigator>
    );
}
export default DeliveryDrawers;

