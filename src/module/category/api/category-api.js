import axiosInstance from "../../../axios";

export async function getCategoryListApi() {
    const response = await axiosInstance.get('/category');
    return response;
}

export async function getProductListApi(categoryId) {
    const response = await axiosInstance.get(`/product/category/${categoryId}`, {});
    return response;
}

export async function getIndividualProductDetailApi(productId) {
    const response = await axiosInstance.post(`/products/${productId}`);
    return response;
}
