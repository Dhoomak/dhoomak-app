import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from '../../../utils/toast';
import {
  createInquiry,
  createAccount,
  getEnquiryHistory,
  verifyRestaurant,
} from '../api/executive-api';
import { EXECUTIVE } from '../../../utils/strings/screen-name';
import { Alert } from 'react-native';
import {
  isValidEmail,
  isValidPhoneNumber,
  isZipValid,
} from '../../../common/utility/validators';
import { sendOtpApi } from '../../auth/api/auth-api';
import { setAsyncStorageItem } from '../../../utils/async-storage';
import { ASYNC_STORAGE_KEY } from '../../../data/constant';

export const createInquiryAction = createAsyncThunk(
  'executive/enquiry',
  async ({ enquiryForm, navigation, SCREEN }, { rejectWithValue }) => {
    const {
      meetingWith,
      restaurantName,
      restaurantAddress,
      name,
      mobileNo,
      email,
      city,
      pinCode,
      nextMeetingScheduled,
      comment,
      interest,
    } = enquiryForm;
    try {
      const response = await createInquiry({
        meetingWith: meetingWith,
        restaurantName: restaurantName,
        meetingPersonName: name,
        phoneNumber: mobileNo,
        email: email,
        address: { city: city, street: restaurantAddress, zipcode: pinCode },
        serviceNeeded: 'INVENTORY',
        serviceComment: 'we need inventory service',
        nextMeetingSchedule: nextMeetingScheduled,
        comments: [comment],
        interest: interest,
      });
      if (response) {
        Alert.alert(
          'Inquiry Created',
          'Your inquiry has been created successfully.',
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate(EXECUTIVE.DASHBOARD),
            },
          ],
          { cancelable: false },
        );
      }
      return response;
    } catch (error) {
      const errorMessage = error?.data?.data?.error || 'An error occurred.';
      toast(errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);

export const createAccountAction = createAsyncThunk(
  'executive/createAccount',
  async ({ enquiryForm, navigation, SCREEN }, { rejectWithValue }) => {
    console.log('thunk', enquiryForm);
    const {
      name,
      restaurantName,
      restaurantAddress,
      mobileNo,
      email,
      city,
      pinCode,
      gstNo,
      panNo,
      images = [],
    } = enquiryForm;
    try {
      if (!isValidEmail(email)) {
        Alert.alert(
          'Missing Fields',
          'Please enter a valid email',
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
          { cancelable: false },
        );
        return;
      }
      if (!isValidPhoneNumber(mobileNo)) {
        Alert.alert(
          'Missing Fields',
          'Please enter a valid phone number',
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
          { cancelable: false },
        );
        return;
      }
      if (!isZipValid(pinCode)) {
        Alert.alert(
          'Missing Fields',
          'Please enter a valid Zip code',
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
          { cancelable: false },
        );
        return;
      }
      if (
        !name ||
        !restaurantName ||
        !restaurantAddress ||
        !mobileNo ||
        !email ||
        !city ||
        !pinCode
      ) {
        Alert.alert(
          'Missing Fields',
          'Please fill in all required fields.',
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
          { cancelable: false },
        );
        return;
      }

      if (images.length === 0) {
        Alert.alert(
          'Missing Image',
          'Please click image to upload',
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
          { cancelable: false },
        );
        return;
      }

      const payload = {
        phoneNumber: mobileNo,
        name: restaurantName,
        address: {
          city: city,
          zipcode: pinCode,
          street: restaurantAddress,
        },
        images: images,
        email: email,
        type: 'RESTAURANT',
        managerName: name,
        gstNo: gstNo,
        panNo: panNo,
      };

      const response = await createAccount(payload);

      if (response) {
        toast('Form Submitted Successfully');
        console.log(response, 'response from create account');
        navigation.navigate(EXECUTIVE.VERIFICATION_OTP, {
          data: enquiryForm,
          profileId: response.data.profile._id,
          userId: response.data.profile.user,
        });
      }
      return response;
    } catch (error) {
      console.log("thunk inside catch")
      console.log(error);
      const errorMessage = error?.data?.data?.error || 'An error occurred.';
      toast(errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);

export const verifyRestaurantAction = createAsyncThunk(
  'executive/verifyRestaurant',
  async ({ enquiryForm, userId, navigation, SCREEN }, { rejectWithValue }) => {
    try {
      const response = await verifyRestaurant(enquiryForm);
      setAsyncStorageItem(ASYNC_STORAGE_KEY.USER_RESTAURANT_ID, userId);
      navigation.navigate(SCREEN.EXECUTIVE.ADD_NEW, {
        userId,
      });

      if (response) {
        console.log(response, 'response..............');
      }

      return response;
    } catch (error) {
      console.log('thunk inside catch');
      console.log(error);
      const errorMessage = error?.data?.data?.error || 'An error occurred.';
      toast(errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);

export const restaurantSendOtpAction = createAsyncThunk(
  'executive/restaurantSendOtpAction',
  async ({ phoneNumber, navigation, SCREEN }, { rejectWithValue }) => {
    try {
      const phoneNumberWithPrefix = '+91' + phoneNumber;
      const response = await sendOtpApi(phoneNumberWithPrefix);
      if (response?.status) {
        toast(response?.data?.data?.message);
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