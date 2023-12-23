import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSubscriptionDetailsApi } from '../api/subscription-api';

import { toast } from '../../../utils/toast';

export const getSubscriptionDetailsAction = createAsyncThunk(
    'inventory/getSubscriptionDetailsAction',
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