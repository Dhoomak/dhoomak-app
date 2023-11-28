// Navigations
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import SplashScreen from '../module/login/screens/splash';

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
                        name="Splash"
                        component={SplashScreen}
                        options={{ animation: 'fade', headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}


export default Navigation;