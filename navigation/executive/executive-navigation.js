import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { Dashboard } from '../../module/executive/screens'

// Components
import UserIcon from '../../module/home/components/user-icon';

// Utilities
import COLORS from '../../utils/color';
import { EXECUTIVE } from '../../utils/strings/screen-name';

// Stack
const ExecutiveStack = createNativeStackNavigator();

const ExecutiveScreens = () => {
    return (
        <ExecutiveStack.Navigator>
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
        </ExecutiveStack.Navigator>
    );
};

export default ExecutiveScreens