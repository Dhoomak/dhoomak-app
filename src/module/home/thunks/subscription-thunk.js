import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSubscriptionDetailsApi, createSubscriptionApi } from '../api/subscription-api';
import { toast } from '../../../utils/toast';
import { ROLE } from '../../../data/constant';


export const getSubscriptionDetailsAction = createAsyncThunk(
    'subscription/getSubscriptionDetailsAction',
    async ({ userId }, { rejectWithValue }) => {
        try {
            const response = await getSubscriptionDetailsApi(userId);
            console.log("Data Get Subscription:", JSON.stringify(response.data));

            return response.data.subscrption;
        } catch (error) {
            const stringfiedError = JSON.stringify(error);
            const errorMessage = error?.message || 'An error occurred.'
            console.log("Error Get Subscription: ", stringfiedError);

            toast(errorMessage);
            return rejectWithValue(errorMessage);
        }
    },
);

export const createSubscriptionAction = createAsyncThunk(
    'subscription/createSubscriptionAction',
    async ({ subscriptionData }, { rejectWithValue }) => {
        try {
            const response = await createSubscriptionApi(subscriptionData);
            // console.log("GET PRODUCT DETAILS:", response.data);

            return response.data;
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


export const saveInventoryAction = createAsyncThunk(
    'subscription/saveInventoryAction',
    async ({ subscriptionData, navigation, SCREEN, inventoryItems, userType }, { rejectWithValue }) => {
        try {
            console.log('SUBSCRIPTION DATA: ', subscriptionData)
            const response = await createSubscriptionApi(subscriptionData);
            console.log("SAVE INVENTORY DETAILS:", response.data);

            if (userType === ROLE.EXECUTIVE) {
                navigation.navigate(SCREEN.EXECUTIVE.THANK_YOU);
            } else {
                navigation.navigate(SCREEN.USER.SUBSCRIPTION, { inventoryItems });
            }


            return response.data;
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