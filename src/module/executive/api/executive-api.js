import axiosInstance from "../../../axios";
import { ASYNC_STORAGE_KEY } from "../../../data/constant";


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
    console.log('Create Account....................')
    console.log(createAccountDetails,"createAccountDetails")
    const response = await axiosInstance.post('/profile/account', createAccountDetails);
    return response.data;
}

export async function verifyOtpApi(phoneNumber, otp) {
    const response = await axiosInstance.post('/user/verify-otp', {
        phoneNumber: phoneNumber,
        otp: otp.toString(),
    });
return response;
}


export async function getEnquiryHistory(phoneNumber, otp) {
    const agentID = await getAsyncStorageItem(ASYNC_STORAGE_KEY.USER_DATA);
    console.log(agentID)
    // const response = await axiosInstance.post(`enquiry/agent/`, {
    //     phoneNumber: phoneNumber,
    //     otp: otp.toString(),
    // });
return response;
}
