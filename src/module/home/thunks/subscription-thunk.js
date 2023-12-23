import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSubscriptionDetailsApi } from '../api/subscription-api';
import { toast } from '../../../utils/toast';
import { ROLE } from '../../../data/constant';
import { setInventory } from '../../inventory/reducers/inventory-reducer';
import { saveSubscriptionDataInDb } from '../../../common/apis/save-subscription-data';

export const getSubscriptionDetailsAction = createAsyncThunk(
    'subscription/getSubscriptionDetailsAction',
    async ({ userId }, { rejectWithValue, dispatch }) => {
        try {
            const response = await getSubscriptionDetailsApi(userId);
            console.log("Data Get Subscription:", JSON.stringify(response.data));
            const productsList = response?.data?.subscrption?.products || [];

            dispatch(setInventory(productsList))

            return response?.data?.subscrption;
        } catch (error) {
            const stringfiedError = JSON.stringify(error);
            const errorMessage = error?.message || 'An error occurred.'
            console.log("Error Get Subscription: ", stringfiedError);

            toast(errorMessage);
            return rejectWithValue(errorMessage);
        }
    },
);

export const saveInventoryDetailsAction = createAsyncThunk(
    'subscription/saveInventoryDetailsAction',
    async ({ subscriptionData, navigation, SCREEN, inventoryItems, userType }, { rejectWithValue, getState, dispatch }) => {
        try {
            console.log("user type: ", userType)
            const response = await saveSubscriptionDataInDb(subscriptionData);

            // To Reset the subscription we recently saved in db
            dispatch(getSubscriptionDetailsAction({ userId: response.data.subscription.user }));

            console.log("SAVE INVENTORY DETAILS:", response.data);
            const isPaymentDone = getState().subscription.isSubscriptionPaymentDone;
            if (!isPaymentDone) {
                navigation.navigate(SCREEN.USER.SUBSCRIPTION, { inventoryItems });
            } else {
                navigation.popToTop();
            }

        } catch (error) {
            const stringfiedError = JSON.stringify(error);
            const errorMessage = error?.error || 'An error occurred.'

            console.log("Error create subscription: ", stringfiedError);
            // Handle error and show toast
            toast(errorMessage);
            // Return error using rejectWithValue
            return rejectWithValue(errorMessage);
        }
    },
);

export const saveSubscriptionDetailsAction = createAsyncThunk(
    'subscription/saveSubscriptionDetailsAction',
    async ({ subscriptionData, navigation, SCREEN, inventoryItems, userType }, { rejectWithValue, getState, dispatch }) => {
        try {
            console.log("user type: ", userType)
            const response = await saveSubscriptionDataInDb(subscriptionData);
            // let response;
            // // console.log('SUBSCRIPTION DATA: ', JSON.stringify(subscriptionData))
            // const isSubscribed = getState().subscription.isSubscriptionCreated;

            // if (!isSubscribed) {
            //     console.log('INSIDE CREATE SUBSCRIPTION');
            //     response = await createSubscriptionApi(subscriptionData);
            // } else {
            //     console.log('INSIDE UPDATE SUBSCRIPTION');
            //     response = await saveSubscriptionApi(subscriptionData);
            // }

            // To Reset the subscription we recently saved in db
            dispatch(getSubscriptionDetailsAction({ userId: response.data.subscription.user }));

            // Consoling Data
            console.log("SAVE INVENTORY DETAILS:", response.data);

            if (userType === ROLE.EXECUTIVE) {
                navigation.replace(SCREEN.EXECUTIVE.THANK_YOU, { userId: response.data.subscription.user });
            } else {
                navigation.navigate(SCREEN.USER.PAYMENT, { inventoryItems });
            }

            // return response.data;
        } catch (error) {
            const stringfiedError = JSON.stringify(error);
            const errorMessage = error?.error || 'An error occurred.'

            console.log("Error create subscription: ", stringfiedError);
            // Handle error and show toast
            toast(errorMessage);
            // Return error using rejectWithValue
            return rejectWithValue(errorMessage);
        }
    },
);
