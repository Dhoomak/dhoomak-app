// Navigations
import { NavigationContainer } from '@react-navigation/native';

// Stacks
import { AuthScreens, UserScreens, ExecutiveScreens, DeliveryScreens } from './screens'

// Hooks
import useCheckLogin from '../module/auth/hooks/use-check-login';

// Data
import { ROLE } from '../data/constant';

function Navigation() {
  const loggedInStatus = useCheckLogin();

  const {
    isLoggedIn = false,
    userData: {
      userType = ''
    } = {}
  } = loggedInStatus || {};

  function GetStack() {
    if (isLoggedIn) {
      switch (userType) {
        case ROLE.RESTAURANT: {
          return <UserScreens />;
        }
        case ROLE.EXECUTIVE: {
          return <ExecutiveScreens />;
        }
        case ROLE.DELIVERY: {
          return <DeliveryScreens />;
        }
        default: {
          return <UserScreens />;
          return <DeliveryScreens />;
          return <ExecutiveScreens />;
        }
      }
    } else {
      return <AuthScreens />;
    }
  }

  return (
    <>
      <NavigationContainer>
        <GetStack />
      </NavigationContainer>
    </>
  );
}

export default Navigation;
