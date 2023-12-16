import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { EnquiryDetails, EnquiryForm, EnquiryHistory, VerificationOTP } from '../../module/executive/screens'

// Utilities
import COLORS from '../../utils/color';
import { EXECUTIVE } from '../../utils/strings/screen-name';
import CreateAccount from '../../module/executive/screens/create-account';
<<<<<<< Updated upstream
import ExecutiveTabs from './executive-tab';
=======
import UserIcon from '../../module/home/components/user-icon';
import ExecutiveDrawers from './executive-drawer';
import OnboardingDetails from '../../module/executive/screens/onboarding-details';
import AddNewUpdate from '../../module/executive/screens/add-new-update';
>>>>>>> Stashed changes

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
            <ExecutiveStack.Screen
                name={EXECUTIVE.ENQUIRY_HISTORY}
                component={EnquiryHistory}
                options={{
                    title: 'Enquiry History',
                    headerStyle: {
                        backgroundColor: COLORS.primary
                    },
                }}
            />
            <ExecutiveStack.Screen
                name={EXECUTIVE.ENQUIRY_DETAILS}
                component={EnquiryDetails}
                options={{
                    title: 'Enquiry Details',
                    headerStyle: {
                        backgroundColor: COLORS.primary
                    },
                }}
            />
            <ExecutiveStack.Screen
                name={EXECUTIVE.ONBOARDING_HISTORY_DETAILS}
                component={OnboardingDetails}
                options={{
                    title: 'Onboarding Details',
                    headerStyle: {
                        backgroundColor: COLORS.primary
                    },
                }}
            />
             <ExecutiveStack.Screen
                name={EXECUTIVE.EXECUTIVE_ADD_NEW}
                component={AddNewUpdate}
                options={{
                    title: 'Onboarding Details',
                    headerStyle: {
                        backgroundColor: COLORS.primary
                    },
                }}
            />
        </ExecutiveStack.Navigator>
    );
};

export default ExecutiveScreens