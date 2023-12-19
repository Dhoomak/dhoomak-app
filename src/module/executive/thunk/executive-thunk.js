import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from '../../../utils/toast';
import { createInquiry,createAccount, getEnquiryHistory, verifyRestaurant } from '../api/executive-api';
import { EXECUTIVE } from '../../../utils/strings/screen-name';


export const createInquiryAction = createAsyncThunk(
  'executive/enquiry',
  async ({ enquiryForm}, { rejectWithValue }) => {
    const { meetingWith,restaurantName,restaurantAddress,name,mobileNo,email,city,pinCode,nextMeetingScheduled,comment,interest} = enquiryForm;
    try {
      const response = await createInquiry({
                meetingWith: meetingWith,
                restaurantName: restaurantName,
                meetingPersonName: name,
                phoneNumber: mobileNo,
                email: email,
                address: { city: city, street: restaurantAddress, zipcode: pinCode},
                serviceNeeded: "INVENTORY",
                serviceComment: "we need inventory service",
                nextMeetingSchedule: nextMeetingScheduled,
                comments: [comment],
                interest: interest
        });
        console.log(response,"response................................")
        return response
    } catch (error) {
      const errorMessage = error?.data?.data?.error || 'An error occurred.'
      toast(errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);

export const createAccountAction = createAsyncThunk(
  'executive/createAccount',
  async ({ enquiryForm,navigation, SCREEN}, { rejectWithValue }) => {
    console.log("thunk",enquiryForm)
    const { name,restaurantName,restaurantAddress,mobileNo,email,city,pinCode,gstNo,panNo} = enquiryForm;
    try {
      const response = await createAccount({
              phoneNumber: mobileNo,
              name: restaurantName,
              address: {
                city: city,
                  zipcode: pinCode,
                  street: restaurantAddress,
              },
              images: ["asf"],
              email: email,
              type: "RESTAURANT",
              managerName: name,
              gstNo: gstNo,
              panNo: panNo
              });
            if (response) {
              console.log(response,"response..............")
                navigation.navigate(EXECUTIVE.VERIFICATION_OTP,{
                data: enquiryForm
                });
              }
      return response
    } catch (error) {
                // console.log("thunk inside catch")
      console.log(error);
      const errorMessage = error?.data?.data?.error || 'An error occurred.'
      toast(errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);

export const verifyRestaurantAction = createAsyncThunk(
  'executive/verifyRestaurant',
  async ({ enquiryForm,navigation, SCREEN}, { rejectWithValue }) => {
    console.log("thunk",enquiryForm)
    const { } = enquiryForm;
    try {
      const response = await verifyRestaurant({
          profileId: "6581955ec4d3fdc0b27233d8",
          phoneNumber: "+9184728792321",
          otp: "3333"
          });
            if (response) {
              console.log(response,"response..............")
                // navigation.navigate(EXECUTIVE.VERIFICATION_OTP,{
                // data: enquiryForm
                // });
              }
      return response
    } catch (error) {
                // console.log("thunk inside catch")
      console.log(error);
      const errorMessage = error?.data?.data?.error || 'An error occurred.'
      toast(errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);



export const getEnquiryHistoryAction = createAsyncThunk(
  'executive/get-history',
  async ({ enquiryForm, navigation, SCREEN }, { rejectWithValue }) => {
    console.log("thunk")
    await getEnquiryHistory()
  }
);