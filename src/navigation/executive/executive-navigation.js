import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { Dashboard, EnquiryForm } from '../../module/executive/screens'

// Components
import UserIcon from '../../module/home/components/user-icon';

// Utilities
import COLORS from '../../utils/color';
import { EXECUTIVE } from '../../utils/strings/screen-name';

// Stack
const ExecutiveStack = createNativeStackNavigator();

const ExecutiveScreens = () => {
    return (
        <ExecutiveStack.Navigator
            initialRouteName={EXECUTIVE.ENQUIRY_FORM}
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
        </ExecutiveStack.Navigator>
    );
};

export default ExecutiveScreens