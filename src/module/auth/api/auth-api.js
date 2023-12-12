
import axiosInstance from "../../../axios";

export async function sendOtpApi(phoneNumberWithPrefix) {
    const response = await axiosInstance.post('/user/send-otp', {
        phoneNumber: phoneNumberWithPrefix,
    });

    return response;
}

export async function verifyOtpApi(phoneNumber, otp) {
    const response = await axiosInstance.post('/user/verify-otp', {
        phoneNumber: phoneNumber,
        otp: otp.toString(),
    });
    return response;
}
