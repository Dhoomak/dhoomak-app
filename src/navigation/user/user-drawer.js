import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import UserTabs from './user-tab';

// Components
import UserIcon from '../../module/home/components/user-icon';

// Utilities 
import { USER } from './../../utils/strings/screen-name';
import COLORS from '../../utils/color';

// Drawer
const UserDrawer = createDrawerNavigator();

function UserDrawers() {
    return (
        <UserDrawer.Navigator
            screenOptions={{
                unmountOnBlur: true,
                headerStyle: {
                    backgroundColor: COLORS.primary
                },
            }}
        >
            <UserDrawer.Screen
                name={USER.TAB}
                component={UserTabs}
                options={{
                    title: 'Home',
                    headerRight: () => <UserIcon />,
                    headerTitle: '',
                }}
            />
        </UserDrawer.Navigator>
    );
}

export default UserDrawers;

