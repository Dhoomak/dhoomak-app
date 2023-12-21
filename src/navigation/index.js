// Navigations
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
// Stacks
import { AuthScreens, UserScreens, ExecutiveScreens, DeliveryScreens } from './screens'

// Hooks
import useCheckLogin from '../module/auth/hooks/use-check-login';

// Data
import { ROLE } from '../data/constant';
import COLORS from '../utils/color';

function Navigation() {
  const loggedInStatus = useCheckLogin();
  const scheme = useColorScheme();

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

  const DefaultTheme = {
    dark: false,
    colors: {
      primary: COLORS.primary,
      background: COLORS.grey,
      card: COLORS.white,
      text: COLORS.black,
      border: 'rgb(216, 216, 216)',
      notification: 'rgb(255, 59, 48)',
    },
  };

  return (
    <>
      <NavigationContainer theme={scheme === 'dark' ? DefaultTheme : DefaultTheme}>
        <GetStack />
      </NavigationContainer>
    </>
  );
}

export default Navigation;
