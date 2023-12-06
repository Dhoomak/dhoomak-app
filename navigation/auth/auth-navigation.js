import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AUTH } from '../../utils/strings/screen-name';
import { SplashScreen } from '../../common/screens';
import LoginScreen from '../../module/auth/screens/login';
import EnterOtpScreen from '../../module/auth/screens/enter-otp';

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
        </AuthStack.Navigator>
    );
};

export default AuthScreens