import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCategoryListApi, getProductListApi } from '../api/category-api';
import { toast } from '../../../utils/toast';

export const getCategoryListAction = createAsyncThunk(
    'category/getCategoryListAction',
    async ({ } = {}, { rejectWithValue }) => {
        try {
            // console.log('GET CATEGORY LIST API fired')
            const response = await getCategoryListApi();

            return response.data.data;
        } catch (error) {
            const stringfiedError = JSON.stringify(error);
            const errorMessage = error?.data?.data?.error || 'An error occurred.'
            console.log("Error Get Categories: ", stringfiedError);
            // Handle error and show toast
            toast(errorMessage);
            // Return error using rejectWithValue
            return rejectWithValue(errorMessage);
        }
    },
);

export const getProductsListAction = createAsyncThunk(
    'category/getProductListAction',
    async ({ categoryId } = {}, { rejectWithValue }) => {
        try {
            const response = await getProductListApi(categoryId);
            // console.log("GET PRODUCT DETAILS:", response.data.data);

            return response.data.data;
        } catch (error) {
            const stringfiedError = JSON.stringify(error);
            const errorMessage = error?.data?.data?.error || 'An error occurred.'

            console.log("Error Get products: ", stringfiedError);
            // Handle error and show toast
            toast(errorMessage);
            // Return error using rejectWithValue
            return rejectWithValue(errorMessage);
        }
    },
);
