// Navigations
import { NavigationContainer } from '@react-navigation/native';

import useCheckLogin from '../module/auth/hooks/use-check-login';

// Stacks
import AuthScreens from './auth';
import UserScreens from './user';


function Navigation() {
    const isLoggedIn = useCheckLogin();
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