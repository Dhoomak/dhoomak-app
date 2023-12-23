import axiosInstance from "../../../axios";

export async function getSubscriptionDetailsApi(userId) {
    const response = await axiosInstance.get(`/subscription/${userId}`);
    return response.data;
}

export async function createSubscriptionApi(subscriptionData) {
    const response = await axiosInstance.post('/subscription', subscriptionData);
    return response.data;
}

export async function saveSubscriptionApi(subscriptionData) {
    const response = await axiosInstance.patch('/subscription', subscriptionData);
    return response.data;
}