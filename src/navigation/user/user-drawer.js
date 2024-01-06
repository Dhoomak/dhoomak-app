import { createDrawerNavigator } from '@react-navigation/drawer';
import UserTabs from './user-tab';
import { Home, Profile } from '../../module/home/screens';
import { USER } from './../../utils/strings/screen-name';

const UserDrawer = createDrawerNavigator();

function UserDrawers() {
    return (
        <UserDrawer.Navigator
            screenOptions={{
                unmountOnBlur: true,
            }}
        >
            <UserDrawer.Screen
                name={USER.HOME}
                component={Home}
                options={{
                    title: 'Home',
                    // headerRight: () => <UserIcon />
                }}
            />
            {/* <UserDrawer.Screen
                name={USER.PROFILE}
                component={Profile}
                options={{
                    title: 'Profile',
                }}
            /> */}
        </UserDrawer.Navigator>
    );
}

export default UserDrawers;

