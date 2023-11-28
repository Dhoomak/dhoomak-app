// Navigations
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import SplashScreen from '../module/login/screens/splash';
import { USER } from '../utils/strings/screen-name';
import AddItems from '../module/category/screens/add-items';
import CategoryList from '../module/category/screens/category-list';

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