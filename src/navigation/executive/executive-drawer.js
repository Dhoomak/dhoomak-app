import {createDrawerNavigator} from '@react-navigation/drawer';

// Screens
import {
  EnquiryHistory,
  Profile,
  OnBoardingHistoryTable,
} from '../../module/executive/screens';

// Tab
import ExecutiveTabs from './executive-tab';

// Components
import UserIcon from '../../module/home/components/user-icon';

// Utilities
import {EXECUTIVE} from './../../utils/strings/screen-name';
import COLORS from '../../utils/color';
import Privacy from '../../module/executive/screens/privacy';
import TermsCondition from '../../module/executive/screens/terms-condition';

const ExecutiveDrawer = createDrawerNavigator();

function ExecutiveDrawers() {
  return (
    <ExecutiveDrawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
      }}>
      <ExecutiveDrawer.Screen
        name={EXECUTIVE.TAB}
        component={ExecutiveTabs}
        options={{
          headerTitle: '',
          title: 'Dashboard',
          headerVisible: false,
          headerLeftLabelVisible: false,
          headerRight: () => <UserIcon className="mr-0" />,
        }}
      />

      <ExecutiveDrawer.Screen
        name={EXECUTIVE.ENQUIRY_HISTORY}
        component={EnquiryHistory}
        options={{
          title: 'Enquiry History',
        }}
      />

      <ExecutiveDrawer.Screen
        name={EXECUTIVE.ONBOARDING_HISTORY_}
        component={OnBoardingHistoryTable}
        options={{
          title: 'Onboarding History',
        }}
      />
      <ExecutiveDrawer.Screen
        name={EXECUTIVE.PRIVACY}
        component={Privacy}
        options={{
          title: 'Privacy',
        }}
      />
      <ExecutiveDrawer.Screen
        name={EXECUTIVE.TERMS_CONDITION}
        component={TermsCondition}
        options={{
          title: 'Terms and Conditions',
        }}
      />
    </ExecutiveDrawer.Navigator>
  );
}

export default ExecutiveDrawers;
