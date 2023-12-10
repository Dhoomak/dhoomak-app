import { createAsyncThunk } from '@reduxjs/toolkit'
import { sendOtpApi, verifyOtpApi } from '../api/auth-api';
import { toast } from '../../../utils/toast';
import { setAsyncStorageItem, setAsyncStorageObjectItem } from '../../../utils/async-storage';
import { ASYNC_STORAGE_KEY } from '../../../data/constant';

export const sendOtpAction = createAsyncThunk(
    'auth/sendOtpAction',
    async ({ mobileNumber, navigation, SCREEN }, { rejectWithValue }) => {
        let response;
        try {
            // make API call
            response = await sendOtpApi(mobileNumber);

            // toast of sucess
            toast(response.data.message);

            // navigate to enter otp
            navigation.navigate(SCREEN.AUTH.ENTER_OTP, {
                mobileNumber: mobileNumber,
            });

        } catch (error) {
            toast(error.data.message)
            return rejectWithValue(error);
        }

        // return data
        return { data: response.data }
    }
)

export const verifyOtpAction = createAsyncThunk(
    'auth/verifyOtpAction',
    async ({ mobileNumber, otp }, { rejectWithValue }) => {
        let response;
        try {
            // make API call
            response = await verifyOtpApi(mobileNumber, otp);
            
            // setting data into local storage
            setAsyncStorageItem(ASYNC_STORAGE_KEY.IS_LOGGED_IN, 'true');
            setAsyncStorageObjectItem(ASYNC_STORAGE_KEY.USER_DATA, response.data);

        } catch (error) {
            // showing toast
            toast(error.data.message)
            // return error 
            return rejectWithValue(error);
        }

        // return data 
        return { data: response.data }
    }
)