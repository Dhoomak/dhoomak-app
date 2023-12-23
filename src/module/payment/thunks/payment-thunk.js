import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from '../../../utils/toast';
import { saveSubscriptionDataInDb } from '../../../common/apis/save-subscription-data';
import { getSubscriptionDetailsAction } from '../../home/thunks/subscription-thunk';
import RazorpayCheckout from 'react-native-razorpay';
import COLORS from '../../../utils/color';
import { APP_NAME, DHOOMAK_ICON, RPAY_KEY_ID } from '../../../data/constant';


export const payNowAction = createAsyncThunk(
    'payment/payNowAction',
    async ({ subscriptionData, navigation, SCREEN }, { rejectWithValue, dispatch }) => {
        try {
            // Make an api request to get ORDER dETAILS 


            // Assemble the object to send in 
            const options = {
                description: 'Credits towards consultation',
                image: DHOOMAK_ICON,
                currency: 'INR',
                key: RPAY_KEY_ID,
                amount: '5000' * 100,
                name: APP_NAME,
                order_id: '',
                prefill: {
                    email: 'gaurav.kumar@example.com',
                    contact: '9191919191',
                    name: 'Gaurav Kumar'
                },
                theme: { color: COLORS.primary }
            }

            // Integrate Razorpay 
            const paymentResponse = await RazorpayCheckout.open(options)

            // Save Changes in DB
            const response = await saveSubscriptionDataInDb(subscriptionData);

            // To Reset the subscription we recently saved in db
            dispatch(getSubscriptionDetailsAction({ userId: response.data.subscription.user }));

            // Consoling Data
            console.log("SAVED INVENTORY DETAILS:", response.data);

            // Redirect to Success Screen
            navigation.navigate(SCREEN.USER.PAYMENT_DONE);

        } catch (error) {
            navigation.replace(SCREEN.USER.PAYMENT_FAIL);

            const stringfiedError = JSON.stringify(error);
            const errorMessage = error?.error || 'An error occurred.'

            console.log("Error create subscription: ", stringfiedError);

            return rejectWithValue(errorMessage);
        }
    },
);

export const payLaterAction = createAsyncThunk(
    'payment/payLaterAction',
    async ({ subscriptionData, navigation, SCREEN }, { rejectWithValue, dispatch }) => {
        try {
            // throw new Error('Custom Error');
            const response = await saveSubscriptionDataInDb(subscriptionData);

            // To Reset the subscription we recently saved in db
            dispatch(getSubscriptionDetailsAction({ userId: response.data.subscription.user }));

            // Consoling Data
            console.log("SAVED INVENTORY DETAILS:", response.data);
            toast('Your Subscription Payment will be charged with your next order charges');

            navigation.navigate(SCREEN.USER.PAYMENT_DONE);

        } catch (error) {
            navigation.replace(SCREEN.USER.PAYMENT_FAIL);

            const stringfiedError = JSON.stringify(error);
            const errorMessage = error?.error || 'An error occurred.'

            console.log("Error create subscription: ", stringfiedError);

            return rejectWithValue(errorMessage);
        }
    },
);

