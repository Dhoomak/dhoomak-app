import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfileDetailsApi, deleteProfileApi } from '../api/profile-api';
import { toast } from '../../../utils/toast';
import { logoutAction } from '../../auth/thunks/auth-thunk';


export const getProfileDetailsAction = createAsyncThunk(
    'profile/getProfileDetailsAction',
    async ({ userId }, { rejectWithValue }) => {
        try {
            const response = await getProfileDetailsApi(userId);
            console.log("Data Get Profile:", JSON.stringify(response.data));

            return response.data.profile;
        } catch (error) {
            const stringfiedError = JSON.stringify(error);
            const errorMessage = error?.message || 'An error occurred.'
            console.log("Error Get Profile: ", stringfiedError);

            toast(errorMessage);
            return rejectWithValue(errorMessage);
        }
    },
);


export const deleteProfileAction = createAsyncThunk(
    'profile/deleteProfileAction',
    async ({ userId }, { rejectWithValue, dispatch }) => {
        try {
            const response = await deleteProfileApi(userId);
            console.log("Success Delete Profile:", JSON.stringify(response.data));

            dispatch(logoutAction());
            return;
        } catch (error) {
            const stringfiedError = JSON.stringify(error);
            const errorMessage = error?.message || 'An error occurred.'
            console.log("Error Delete Profile: ", stringfiedError);

            toast(errorMessage);
            return rejectWithValue(errorMessage);
        }
    },
);
