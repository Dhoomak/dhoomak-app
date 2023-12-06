// Navigations
import { NavigationContainer } from '@react-navigation/native';

// Stacks
import AuthScreens from './auth';
import UserScreens from './user';

// Hooks
import useCheckLogin from '../module/auth/hooks/use-check-login';

function Navigation() {
    const loggedInStatus = useCheckLogin();

    const { isLoggedIn = false } = loggedInStatus || {};

    return (
        <>
            <NavigationContainer>
                {
                    isLoggedIn ?
                        <UserScreens />
                        :
                        <AuthScreens />
                }
            </NavigationContainer>
        </>
    );
}


export default Navigation;