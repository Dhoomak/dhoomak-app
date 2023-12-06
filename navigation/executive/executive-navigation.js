import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ExecutiveStack = createNativeStackNavigator();

const ExecutiveScreens = () => {
    return (
        <ExecutiveStack.Navigator>
            {/* <ExecutiveStack.Screen
                name={'Login'}
                component={Login}
                options={{ headerShown: false }}
            /> */}
        </ExecutiveStack.Navigator>
    );
};

export default ExecutiveScreens