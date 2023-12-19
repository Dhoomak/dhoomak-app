import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import {
  EnquiryDetails,
  EnquiryForm,
  EnquiryHistory,
  VerificationOTP,
  OnboardingDetails,
  AddNewUpdate,
  CreateAccount,
  ThankYou
} from '../../module/executive/screens';

// Utilities
import COLORS from '../../utils/color';
import { EXECUTIVE } from '../../utils/strings/screen-name';
import UserIcon from '../../module/home/components/user-icon';
import ExecutiveDrawers from './executive-drawer';
import {
  AddItems,
  CategoryList,
  ItemDetail,
} from '../../module/category/screens';
import { InventoryList } from '../../module/inventory/screens';

// Stack
const ExecutiveStack = createNativeStackNavigator();

const ExecutiveScreens = () => {
  return (
    <ExecutiveStack.Navigator initialRouteName={EXECUTIVE.DRAWER}>
      <ExecutiveStack.Screen
        name={EXECUTIVE.DRAWER}
        component={ExecutiveDrawers}
        options={{
          headerShown: false,
          headerRight: () => <UserIcon className="mr-0" />,
        }}
      />
      <ExecutiveStack.Screen
        name={EXECUTIVE.ENQUIRY_FORM}
        component={EnquiryForm}
        options={{
          title: 'Enquiry Form',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
      <ExecutiveStack.Screen
        name={EXECUTIVE.CREATE_ACCOUNT}
        component={CreateAccount}
        options={{
          title: 'Create Account',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
      <ExecutiveStack.Screen
        name={EXECUTIVE.VERIFICATION_OTP}
        component={VerificationOTP}
        options={{
          title: 'Verification Code',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
      <ExecutiveStack.Screen
        name={EXECUTIVE.ENQUIRY_HISTORY}
        component={EnquiryHistory}
        options={{
          title: 'Enquiry History',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
      <ExecutiveStack.Screen
        name={EXECUTIVE.ENQUIRY_DETAILS}
        component={EnquiryDetails}
        options={{
          title: 'Enquiry Details',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
      <ExecutiveStack.Screen
        name={EXECUTIVE.ONBOARDING_HISTORY_DETAILS}
        component={OnboardingDetails}
        options={{
          title: 'Onboarding Details',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
      <ExecutiveStack.Screen
        name={EXECUTIVE.EXECUTIVE_ADD_NEW}
        component={AddNewUpdate}
        options={{
          title: 'Onboarding Details',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
      <ExecutiveStack.Screen
        name={EXECUTIVE.ADD_NEW}
        component={AddItems}
        options={{
          title: 'Add Item',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
      <ExecutiveStack.Screen
        name={EXECUTIVE.EXECUTIVE_ITEM_DETAILS}
        component={ItemDetail}
        options={{
          title: 'Onboarding Details',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
      <ExecutiveStack.Screen
        name={EXECUTIVE.CATEGORY}
        component={CategoryList}
        options={{
          title: 'Onboarding Details',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
      <ExecutiveStack.Screen
        name={EXECUTIVE.INVENTORY_LIST}
        component={InventoryList}
        options={{
          title: 'Inventory List',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
      <ExecutiveStack.Screen
        name={EXECUTIVE.THANK_YOU}
        component={ThankYou}
        options={{
          headerShown: false,
          headerTitle: '',
          title: '',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
        }}
      />
    </ExecutiveStack.Navigator>
  );
};

export default ExecutiveScreens;
