import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCategoryListApi } from '../api/category-api';
import { toast } from '../../../utils/toast';

export const getCategoryListAction = createAsyncThunk(
    'category/getCategoryListAction',
    async ({ }, { rejectWithValue }) => {
        try {
            const response = await getCategoryListApi();
            console.log("GET CATEGORY DETAILS:", response);

        } catch (error) {
            // Handle error and show toast
            toast(error.response?.data?.data?.message || 'An error occurred.');

            // Return error using rejectWithValue
            return rejectWithValue(error);
        }
    },
);
