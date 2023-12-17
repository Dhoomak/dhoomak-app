import axios from 'axios';
import { ASYNC_STORAGE_KEY, BASE_API_URL } from '../data/constant';
import { getAsyncStorageItem } from '../utils/async-storage';


let headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  headers,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  async function (config) {
    const authToken = await getAsyncStorageItem(ASYNC_STORAGE_KEY.AUTH_TOKEN);

    if (authToken) {
      config.headers[`x-access-token`] = `${authToken}`
    }

    // console.log("API CONFIG", JSON.stringify(config))
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.error("Error: ", JSON.stringify(error))
    return Promise.reject(error);
  },
);

export default axiosInstance;
