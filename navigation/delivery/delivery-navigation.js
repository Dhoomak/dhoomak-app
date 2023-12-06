import { createNativeStackNavigator } from '@react-navigation/native-stack';

const DeliveryStack = createNativeStackNavigator();

const DeliveryScreens = () => {
    return (
        <DeliveryStack.Navigator>
            {/* <DeliveryStack.Screen
                name={'Login'}
                component={Login}
                options={{ headerShown: false }}
            /> */}
        </DeliveryStack.Navigator>
    );
};

export default DeliveryScreens