// Navigations
import { NavigationContainer } from '@react-navigation/native';

// Stacks
import AuthScreens from './auth';
import UserScreens from './user';
import ExecutiveScreens from './executive';
import DeliveryScreens from './delivery';

// Hooks
import useCheckLogin from '../module/auth/hooks/use-check-login';
import { ROLE } from '../data/constant';


function Navigation() {
    const loggedInStatus = useCheckLogin();

    const {
        isLoggedIn = false,
        userData: {
            role = '',
        } = {}
    } = loggedInStatus || {};

    function getStack() {
        if (isLoggedIn) {
            switch (role) {
                case ROLE.RESTAURANT: {
                    return <UserScreens />;
                }
                case ROLE.EXECUTIVE: {
                    return <ExecutiveScreens />;
                }
                case ROLE.DELIVERY: {
                    return <DeliveryScreens />;
                }
            }
        } else {
            return <AuthScreens />
        }
    }


    console.log("Navigation Role: ", role);

    return (
        <>
            <NavigationContainer>
                {
                    getStack()
                }
            </NavigationContainer>
        </>
    );
}


export default Navigation;