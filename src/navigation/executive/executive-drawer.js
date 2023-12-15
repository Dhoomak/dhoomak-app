import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import { EnquiryHistory } from '../../module/executive/screens';
import ExecutiveTabs from './executive-tab';

// Components
import UserIcon from '../../module/home/components/user-icon';

// Utilities
import { EXECUTIVE } from './../../utils/strings/screen-name';
import COLORS from '../../utils/color';

const ExecutiveDrawer = createDrawerNavigator();

function ExecutiveDrawers() {
    return (
        <ExecutiveDrawer.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary
                },
            }}
        >
            <ExecutiveDrawer.Screen
                name={EXECUTIVE.TAB}
                component={ExecutiveTabs}
                options={{
                    headerTitle: '',
                    title: 'Dashboard',
                    headerVisible: false,
                    headerLeftLabelVisible: false,
                    headerRight: () => <UserIcon className='mr-0' />
                }}
            />

            <ExecutiveDrawer.Screen
                name={EXECUTIVE.ENQUIRY_HISTORY}
                component={EnquiryHistory}
                options={{
                    title: 'Enquiry History',
                }}
            />
        </ExecutiveDrawer.Navigator>
    );
}

export default ExecutiveDrawers;
