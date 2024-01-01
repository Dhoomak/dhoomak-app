import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screen
import { Subscription } from '../../module/home/screens';
import { PaymentDoneModal, PaymentFailModal, PaymentOptions } from '../../module/payment/screens';
import { AddItems, CategoryList, ItemDetail, } from '../../module/category/screens'
import { InventoryList } from '../../module/inventory/screens'
import { OrderHistoryDetails } from '../../module/history/screens';

// Drawer
import UserDrawers from './user-drawer';

// Utilities
import { COMMON, USER } from '../../utils/strings/screen-name';
import COLORS from '../../utils/color';
import EditIcon from '../../module/home/components/edit-icon';

// Stack
const UserStack = createNativeStackNavigator();

// Top Tab
import UserTobTabs from './user-top-tab';
import { Privacy, TermsCondition } from '../../module/executive/screens';
import { PRODUCT_UPDATION_TYPE } from '../../data/constant';


const UserScreens = () => {
    return (
        <UserStack.Navigator
            initialRouteName={USER.DRAWER}
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary
                }
            }}
        >
            <UserStack.Screen
                name={USER.DRAWER}
                component={UserDrawers}
                options={{ headerShown: false }}
            />
            <UserStack.Screen
                name={USER.TOP_TAB}
                component={UserTobTabs}
                options={{
                    headerShadowVisible: false,
                    title: '',
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: COLORS.primary
                    }
                }}
            />
            <UserStack.Screen
                name={USER.ADD_ITEMS}
                component={AddItems}
                options={{
                    title: 'Create Your Inventory',
                }}
                initialParams={{
                    productUpdationType: PRODUCT_UPDATION_TYPE.SUBSCRIPTION,
                    isUpdating: false,
                }}
            />
            <UserStack.Screen
                name={USER.CATEGORY}
                component={CategoryList}
                options={{
                    title: 'Categories',
                }}
            />
            <UserStack.Screen
                name={USER.PAYMENT}
                component={PaymentOptions}
                options={{
                    title: 'Payment Options',
                }}
            />
            <UserStack.Screen
                name={USER.ITEM_DETAIL}
                component={ItemDetail}
                options={({ route }) => ({
                    title: route?.params?.item?.name ? `${route?.params?.item?.name} Details` : 'Product Details',
                })}
            />
            <UserStack.Screen
                name={USER.SUBSCRIPTION}
                component={Subscription}
                options={{
                    title: 'Subscription',
                }}
            />

            <UserStack.Screen
                name={USER.INVENTORY_LIST}
                component={InventoryList}
                options={{
                    title: 'Inventory List',
                }}
                initialParams={{
                    productUpdationType: PRODUCT_UPDATION_TYPE.SUBSCRIPTION,
                    isUpdating: false,
                }}
            />
            <UserStack.Screen
                name={USER.ORDER_HISTORY_DETAILS}
                component={OrderHistoryDetails}
                options={{
                    title: 'Order Summary',
                }}
            />
            <UserStack.Screen
                name={USER.PAYMENT_DONE}
                component={PaymentDoneModal}
                options={{
                    headerShown: false,
                }}
            />
            <UserStack.Screen
                name={USER.PAYMENT_FAIL}
                component={PaymentFailModal}
                options={{
                    headerShown: false,
                }}
            />
            <UserStack.Screen
                name={COMMON.PRIVACY}
                component={Privacy}
                options={{
                    title: 'Privacy Policy',
                }}
            />
            <UserStack.Screen
                name={COMMON.TERMS_CONDITION}
                component={TermsCondition}
                options={{
                    title: 'Terms of Use',
                }}
            />
        </UserStack.Navigator>
    );
};

export default UserScreens