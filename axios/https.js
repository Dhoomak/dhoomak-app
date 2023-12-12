import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosInstance from './axios-instance'; // Update the import path
import {toast} from '../utils/toast';
import {
  setAsyncStorageItem,
  setAsyncStorageObjectItem,
} from '../utils/async-storage';

export const sendOtpAction = createAsyncThunk(
  'auth/sendOtpAction',
  async ({phone, navigation, SCREEN}, {rejectWithValue}) => {
    // console.log(phone, 'phone');
    try {
      const phoneNumberWithPrefix = '+91' + phone;
      const response = await axiosInstance.post('/user/send-otp', {
        phoneNumber: phoneNumberWithPrefix,
      });
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
  async ({phone, otp}, {rejectWithValue}) => {
    try {
      // const phoneNumberWithPrefix = '+91' + mobileNumber;
      // make API call
      const response = await axiosInstance.post('/user/verify-otp', {
        phoneNumber: phone,
        otp: String(otp),
      });
      console.log(response.status, 'otp response: ');
      if (response?.status) {
        console.log(response?.data?.data, 'otp response: ');
        setAsyncStorageItem(ASYNC_STORAGE_KEY.IS_LOGGED_IN, 'true');
        setAsyncStorageObjectItem(
          ASYNC_STORAGE_KEY.USER_DATA,
          response?.data?.data,
        );
      }
    } catch (error) {
      // showing toast
      toast(error.data.message);
      // return error
      return rejectWithValue(error);
    }

    // return data
    return {data: response.data};
  },
);
