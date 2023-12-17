import axiosInstance from "../../../axios";

export async function getIndividualProductDetailApi(productId) {
    const response = await axiosInstance.post(' /products', {}, { params: { productId } });
    return response;
}
export async function getCategoryListApi() {
    const response = await axiosInstance.post(' /products',);
    return response;
}
