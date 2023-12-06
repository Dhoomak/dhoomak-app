import { createNativeStackNavigator } from '@react-navigation/native-stack';

const UserStack = createNativeStackNavigator();

const UserScreens = () => {
    return (
        <UserStack.Navigator>
            {/* <UserStack.Screen
                name={'Login'}
                component={Login}
                options={{ headerShown: false }}
            /> */}
        </UserStack.Navigator>
    );
};

export default UserScreens