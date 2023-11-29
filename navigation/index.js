// Navigations
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import SplashScreen from '../module/login/screens/splash';
import AddItems from '../module/category/screens/add-items';
import CategoryList from '../module/category/screens/category-list';
import Home from '../module/home/screens/home';
import UserIcon from '../module/home/components/user-icon';

// Utilities
import { USER } from '../utils/strings/screen-name';
import COLORS from '../utils/color';

// Stacks
const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName='Splash'
                    screenOptions={{}}
                >
                    <Stack.Screen
                        name={USER.SPLASH}
                        component={SplashScreen}
                        options={{
                            animation: 'fade',
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name={USER.HOME}
                        component={Home}
                        options={{
                            title: 'Home',
                            headerStyle: {
                                backgroundColor: COLORS.primary
                            },
                            headerRight: () => <UserIcon />
                        }}
                    />
                    <Stack.Screen
                        name={USER.ADDITEMS}
                        component={AddItems}
                        options={{
                            title: 'Create Your Inventory',
                        }}
                    />
                    <Stack.Screen
                        name={USER.CATEGORY}
                        component={CategoryList}
                        options={{
                            title: 'Categories',
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}


export default Navigation;