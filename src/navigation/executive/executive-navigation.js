import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { EnquiryForm, VerificationOTP } from '../../module/executive/screens'

// Utilities
import COLORS from '../../utils/color';
import { EXECUTIVE } from '../../utils/strings/screen-name';
import CreateAccount from '../../module/executive/screens/create-account';
import ExecutiveTabs from './executive-tab';

// Stack
const ExecutiveStack = createNativeStackNavigator();

const ExecutiveScreens = () => {
    return (
        <ExecutiveStack.Navigator
            initialRouteName={EXECUTIVE.DASHBOARD}
        >
            <ExecutiveStack.Screen
                name={EXECUTIVE.TAB}
                component={ExecutiveTabs}
                options={{
                    headerShown: false,
                }}
            />
            <ExecutiveStack.Screen
                name={EXECUTIVE.ENQUIRY_FORM}
                component={EnquiryForm}
                options={{
                    title: 'Enquiry Form',
                    headerStyle: {
                        backgroundColor: COLORS.primary
                    },
                }}
            />
            <ExecutiveStack.Screen
                name={EXECUTIVE.CREATE_ACCOUNT}
                component={CreateAccount}
                options={{
                    title: 'Create Account',
                    headerStyle: {
                        backgroundColor: COLORS.primary
                    },
                }}
            />
            <ExecutiveStack.Screen
                name={EXECUTIVE.VERIFICATION_OTP}
                component={VerificationOTP}
                options={{
                    title: 'Verification Code',
                    headerStyle: {
                        backgroundColor: COLORS.primary
                    },
                }}
            />
        </ExecutiveStack.Navigator>
    );
};

export default ExecutiveScreens