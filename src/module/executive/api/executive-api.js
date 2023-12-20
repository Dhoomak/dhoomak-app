import axiosInstance from '../../../axios';
import {ASYNC_STORAGE_KEY} from '../../../data/constant';
import {getAsyncStorageObjectItem} from '../../../utils/async-storage';

export async function createInquiry(inquiryData) {
  try {
    const response = await axiosInstance.post('/enquiry', inquiryData);
    return response.data;
  } catch (error) {
    console.error('Error creating inquiry:', error);
    throw error;
  }
}

export async function createAccount(createAccountDetails) {
  console.log('Create Account....................');
  console.log(createAccountDetails, 'createAccountDetails');
  const response = await axiosInstance.post(
    '/profile/account',
    createAccountDetails,
  );
  return response.data;
}

export async function verifyOtpApi(phoneNumber, otp) {
  const response = await axiosInstance.post('/user/verify-otp', {
    phoneNumber: phoneNumber,
    otp: otp.toString(),
  });
  return response;
}

// this is for restraunt otp verification

export async function verifyRestaurant(enquiryForm) {
  // console.log(profileId, phoneNumber, otp, 'inside api service');
  console.log(enquiryForm, 'inside api service');
  const response = await axiosInstance.post(
    '/profile/verify-account-otp',
    enquiryForm,
  );
  return response;
}

export async function getEnquiryHistory(phoneNumber, otp) {
  console.log('get api service');
  const userData = await getAsyncStorageObjectItem(ASYNC_STORAGE_KEY.USER_DATA);
  console.log(userData, 'agent data');
  const response = await axiosInstance.get(`/enquiry/agent/${userData._id}`);
  console.log(response?.data?.data?.enquiries);
  return response;
}

export async function updateEnquiry(meetingWith, comment, interest) {
  console.log('update api');
  const userData = await getAsyncStorageObjectItem(ASYNC_STORAGE_KEY.USER_DATA);
  console.log(userData, 'agent data');
  const response = await axiosInstance.put(`/enquiry`, {
    meetingWith,
    comment,
    interest,
    id: id,
  });
  console.log(response);
  console.log(response?.data?.data?.enquiries);
  return response;
}
