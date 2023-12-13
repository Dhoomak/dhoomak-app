import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendOtpApi, verifyOtpApi } from '../api/auth-api';
import { toast } from '../../../utils/toast';
import { setAsyncStorageItem, setAsyncStorageObjectItem, } from '../../../utils/async-storage';
import { ASYNC_STORAGE_KEY } from '../../../data/constant';

export const sendOtpAction = createAsyncThunk(
  'auth/sendOtpAction',
  async ({ phoneNumber, navigation, SCREEN }, { rejectWithValue }) => {
    try {
      const phoneNumberWithPrefix = '+91' + phoneNumber;
      const response = await sendOtpApi(phoneNumberWithPrefix);

      if (response?.status) {
        toast(response?.data?.data?.message);
        navigation.navigate(SCREEN.AUTH.ENTER_OTP, {
          phoneNumber: phoneNumberWithPrefix,
        });
      }
    } catch (error) {
      // Handle error and show toast
      toast(error.response?.data?.message || 'An error occurred.');

      // Return error using rejectWithValue
      return rejectWithValue(error);
    }
  },
);

export const verifyOtpAction = createAsyncThunk(
  'auth/verifyOtpAction',
  async ({ phoneNumber, otp }, { rejectWithValue }) => {
    try {
      const response = await verifyOtpApi(phoneNumber, otp);

      if (response?.status) {
        const { data = {}, message } = response?.data?.data;
        const { authToken = '', existingUser = {} } = data;

        await setAsyncStorageItem(ASYNC_STORAGE_KEY.IS_LOGGED_IN, 'true');
        await setAsyncStorageItem(ASYNC_STORAGE_KEY.AUTH_TOKEN, authToken);
        await setAsyncStorageObjectItem(ASYNC_STORAGE_KEY.USER_DATA, existingUser);

        toast(message);

        return data;
      }
    } catch (error) {
      // showing toast
      toast(error?.data?.message);
      // return error
      return rejectWithValue(error);
    }
  },
);