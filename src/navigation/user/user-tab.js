import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Screens
import { Home, Profile, Subscription } from '../../module/home/screens';

// Components
import UserIcon from '../../module/home/components/user-icon';

// Utilities
import COLORS from '../../utils/color';
import { USER } from '../../utils/strings/screen-name';
import Icon from 'react-native-vector-icons/Ionicons';
// Tab
const UserTab = createBottomTabNavigator();

function UserTabs() {
    return (
        <UserTab.Navigator
      screenOptions={({ route }) => ({
        headerShown:false,
        // tabBarStyle: {
        //   height:screenSize().screenHeight*0.085,
        //   borderTopRightRadius:25,
        //   borderTopLeftRadius:25,
        //   paddingBottom:screenSize().screenScale*5,
        //   paddingTop:screenSize().screenScale*5,
        // },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          

          if (route.name === USER.HOME) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === USER.PROFILE) {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === USER.SUBSCRIPTION) {
            iconName = focused ? 'book' : 'book-outline';
          }

          return <Icon name={iconName} size={28} color={color} />;
        },
      })}
      tabBarStyle={{ height: 100 }} // Adjust the height as needed
        >
            <UserTab.Screen
                name={USER.HOME}
                component={Home}
                options={{
                    title: 'Home',
                    headerRight: () => <UserIcon />
                }}
            />
            <UserTab.Screen
                name={USER.PROFILE}
                component={Profile}
                options={{
                    title: 'Profile',
                }}
            />

            <UserTab.Screen
                name={USER.SUBSCRIPTION}
                component={Subscription}
                options={{
                    title: 'Subscription',
                }}
            />
        </UserTab.Navigator>
    );
}

export default UserTabs;