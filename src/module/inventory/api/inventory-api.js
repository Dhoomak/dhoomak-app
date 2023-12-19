import axiosInstance from "../../../axios";

export async function addInventoryApi(subscriptionData) {
    const response = await axiosInstance.post('/subscription', subscriptionData);
    return response.data;
}
