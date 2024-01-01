import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import UserTabs from './user-tab';

// Components
import UserIcon from '../../module/home/components/user-icon';
import { Privacy, TermsCondition } from '../../module/executive/screens';
// Utilities 
import { COMMON, USER } from './../../utils/strings/screen-name';
import COLORS from '../../utils/color';
import UserCustomDrawer from './user-custom-drawer';
import { IonIcon } from '../../utils/icons';

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
                drawerLabelStyle: {
                    marginLeft: -25
                },
                drawerStyle: {
                    width: 240,
                }
            }}

            drawerContent={(props) => <UserCustomDrawer {...props} />}
        >
            <UserDrawer.Screen
                name={USER.TAB}
                component={UserTabs}
                options={{
                    title: 'Home',
                    headerRight: () => <UserIcon className='mr-4' />,
                    headerTitle: '',
                    drawerIcon: (({ color, focused, size }) => (<IonIcon name={focused ? 'home' : 'home-outline'} color={color} size={16} />)),
                }}
            />
            {/* <UserDrawer.Screen
                name={COMMON.PRIVACY}
                component={Privacy}
                options={{
                    title: 'Privacy Policy',
                    headerTitle: 'Privacy Policies',
                    drawerIcon: (({ color, focused, size }) => (<IonIcon name={focused ? 'home' : 'home-outline'} color={color} size={16} />)),
                }}
            /> */}
        </UserDrawer.Navigator>
    );
}

export default UserDrawers;

