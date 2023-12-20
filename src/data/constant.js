export const APP_NAME = 'Dhoomak';
export const OTP_LENGTH = 4;
export const BASE_API_URL =
  'http://ec2-13-232-182-101.ap-south-1.compute.amazonaws.com/';
export const API_VERSION = '/v1';

export const ROLE = {
  RESTAURANT: 'RESTAURANT',
  DELIVERY: 'DELIVERY_AGENT',
  USER: 'USER',
  EXECUTIVE: 'SALES_AGENT',
};

export const ASYNC_STORAGE_KEY = {
  IS_LOGGED_IN: 'isLoggedIn',
  USER_DATA: 'userData',
  AUTH_TOKEN: 'authToken',
  USER_RESTAURANT_ID: 'restaurantId',
  USER_ID: 'userId',
};

export const SUBSCRIPTION_TYPE = {
  WEEKLY: 'WEEKLY',
  FORTNIGHT: 'FORTNIGHT',
  MONTHLY: 'MONTHLY',
};

export const SUBSCRIPTION_PAYMENT_TYPE = {
  PAY_NOW: 'PAY_NOW',
  PAY_LATER: 'PAY_LATER',
};

export const DELIVERY_TIME_SLOTS = [
  {
    value: '10AM-12PM',
    title: '10am - 12pm',
  },
  {
    value: '12PM-14PM',
    title: '12pm - 14pm',
  },
  {
    value: '14PM-16PM',
    title: '14pm - 16pm',
  },
  {
    value: '16PM-18PM',
    title: '16pm - 18pm',
  },
  {
    value: '18PM-20PM',
    title: '18pm - 20pm',
  },
];

export const CATEGORY_DEFAULT_IMAGE = 'https://dhoomak.com/a/img/logo.png';
export const PRODUCTS_DEFAULT_IMAGE = 'https://dhoomak.com/a/img/logo.png';
export const SUBSCRIPTION_AMOUNT = 999;
