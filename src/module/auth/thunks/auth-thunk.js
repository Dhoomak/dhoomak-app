import { createAsyncThunk } from '@reduxjs/toolkit';
import { sendOtpApi, verifyOtpApi } from '../api/auth-api';
import { toast } from '../../../utils/toast';
import {
  setAsyncStorageItem,
  setAsyncStorageObjectItem,
  removeAsyncStorageItem,
} from '../../../utils/async-storage';
import { ASYNC_STORAGE_KEY } from '../../../data/constant';
// import { EXECUTIVE } from '../../../utils/strings/screen-name';
import { resetInventory } from '../../inventory/reducers/inventory-reducer';
import { resetSubscription } from '../../home/reducers/subscription-reducer';

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
      const errorMessage = error?.data?.data?.error || 'An error occurred.';
      // Handle error and show toast
      toast(errorMessage);
      // Return error using rejectWithValue
      return rejectWithValue(errorMessage);
    }
  },
);

export const verifyOtpAction = createAsyncThunk(
  'auth/verifyOtpAction',
  async ({ phoneNumber, otp }, { rejectWithValue }) => {
    console.log('calling verifyOtpAction');
    try {
      const response = await verifyOtpApi(phoneNumber, otp);
      if (response?.status) {
        console.log(response.data, 'data from auth ');
        console.log(response.data.user, 'data from auth user need the id ');
        // console.log(
        //   response.data.user._id,
        //   'data from auth user id .....................................id ',
        // );
        const { data = {}, message } = response?.data?.data;
        const { accessToken = '', user = {} } = data;
        await setAsyncStorageItem(ASYNC_STORAGE_KEY.IS_LOGGED_IN, 'true');
        await setAsyncStorageItem(ASYNC_STORAGE_KEY.AUTH_TOKEN, accessToken);
        await setAsyncStorageObjectItem(ASYNC_STORAGE_KEY.USER_DATA, user);
        toast(message);

        return data;
      }
    } catch (error) {
      const errorMessage = error?.data?.data?.error || 'An error occurred.';
      // Handle error and show toast
      toast(errorMessage);
      // Return error using rejectWithValue
      return rejectWithValue(errorMessage);
    }
  },
);

export const logoutAction = createAsyncThunk(
  'auth/logoutAction',
  async ({ } = {}, { rejectWithValue, dispatch }) => {
    try {
      dispatch(resetInventory());
      dispatch(resetSubscription());
      await removeAsyncStorageItem(ASYNC_STORAGE_KEY.IS_LOGGED_IN);
      await removeAsyncStorageItem(ASYNC_STORAGE_KEY.USER_DATA);
      await removeAsyncStorageItem(ASYNC_STORAGE_KEY.AUTH_TOKEN);

      return;

    } catch (error) {
      const errorMessage = error?.data?.data?.error || 'An error occurred.';
      // Handle error and show toast
      toast(errorMessage);
      // Return error using rejectWithValue
      return rejectWithValue(errorMessage);
    }
  },
);
