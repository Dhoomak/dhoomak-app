import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { Dashboard, EnquiryForm, VerificationOPT } from '../../module/executive/screens'

// Components
import UserIcon from '../../module/home/components/user-icon';

// Utilities
import COLORS from '../../utils/color';
import { EXECUTIVE } from '../../utils/strings/screen-name';
import CreateAccount from '../../module/auth/screens/create-account';

// Stack
const ExecutiveStack = createNativeStackNavigator();

const ExecutiveScreens = () => {
    return (
        <ExecutiveStack.Navigator
            initialRouteName={EXECUTIVE.DASHBOARD}
        >
            <ExecutiveStack.Screen
                name={EXECUTIVE.DASHBOARD}
                component={Dashboard}
                options={{
                    title: 'Executive Dashboard',
                    headerStyle: {
                        backgroundColor: COLORS.primary
                    },
                    headerRight: () => <UserIcon />
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
                component={VerificationOPT}
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