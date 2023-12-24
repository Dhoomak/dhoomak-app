import axiosInstance from "../../../axios";
import { orderHistoryList } from "../../../data/data";



export async function getOrderHistoryDetailsApi(userId) {
    const response = await axiosInstance.get(`/order-history/${userId}`);
    return response.data;
}
export async function getFakeOrderHistoryDetailsApi() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                {
                    data: {
                        orderHistoryList
                    }
                }
            )
        }, 2000);
    })
}