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
      userType = ''
    } = {}
  } = loggedInStatus || {};

  function GetStack() {
    // console.log("Navigation Role: ", userType);
    if (isLoggedIn) {
      switch (userType) {
        case ROLE.RESTAURANT: {
          return <UserScreens />;
        }
        case ROLE.EXECUTIVE: {
          9999;
          return <ExecutiveScreens />;
        }
        case ROLE.DELIVERY: {
          return <DeliveryScreens />;
        }
        default: {
          return <UserScreens />;
          // return <ExecutiveScreens />;
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
