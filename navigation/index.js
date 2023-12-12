// Navigations
import {NavigationContainer} from '@react-navigation/native';

// Stacks
import AuthScreens from './auth';
import UserScreens from './user';
import ExecutiveScreens from './executive';
import DeliveryScreens from './delivery';

// Hooks
import useCheckLogin from '../module/auth/hooks/use-check-login';
import {ROLE} from '../data/constant';

function Navigation() {
  const loggedInStatus = useCheckLogin();

  const {isLoggedIn = false, userData: {role = ''} = {}} = loggedInStatus || {};

  function GetStack() {
    console.log(role);
    if (isLoggedIn) {
      switch (role) {
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
          return <ExecutiveScreens />;
        }
      }
    } else {
      return <AuthScreens />;
    }
  }

  // console.log("Navigation Role: ", role);

  return (
    <>
      <NavigationContainer>
        <GetStack />
      </NavigationContainer>
    </>
  );
}

export default Navigation;
