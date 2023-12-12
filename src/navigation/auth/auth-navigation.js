import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { LoginScreen, EnterOtpScreen, CreateAccountScreen, SplashScreen } from '../../module/auth/screens';

// Utilities
import { AUTH } from '../../utils/strings/screen-name';

// Stack
const AuthStack = createNativeStackNavigator();

const AuthScreens = () => {
    return (
        <AuthStack.Navigator
            initialRouteName={AUTH.SPLASH}
        >
            <AuthStack.Screen
                name={AUTH.SPLASH}
                component={SplashScreen}
                options={{
                    animation: 'fade',
                    headerShown: false
                }}
            />
            <AuthStack.Screen
                name={AUTH.LOGIN}
                component={LoginScreen}
                options={{
                    animation: 'fade',
                    headerShown: false
                }}
            />
            <AuthStack.Screen
                name={AUTH.ENTER_OTP}
                component={EnterOtpScreen}
                options={{
                    animation: 'fade',
                    headerShown: false
                }}
            />
            <AuthStack.Screen
                name={AUTH.CREATE_ACCOUNT}
                component={CreateAccountScreen}
                options={{
                    animation: 'fade',
                    headerShown: false
                }}
            />
        </AuthStack.Navigator>
    );
};

export default AuthScreens