import axiosInstance from "../../../axios";

export async function deleteProfileApi(userId) {
    const response = await axiosInstance.delete(`/profile/${userId}`);
    return response.data;
}
export async function getProfileDetailsApi(userId) {
    const response = await axiosInstance.get(`/profile/${userId}`);
    return response.data;
}
