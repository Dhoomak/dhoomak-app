export const APP_NAME = 'Dhoomak';
export const OTP_LENGTH = 4;
export const BASE_API_URL = 'https://apis.prod.dhoomak.com';
// export const BASE_API_URL = 'http://ec2-13-232-182-101.ap-south-1.compute.amazonaws.com/';

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

export const SUBSCRIPTION_PAYMENT_TYPE = [
  {
    title: 'Pay Now',
    value: 'PAY_NOW',
  },
  {
    title: 'Pay Later',
    value: 'PAY_LATER',
  },
];

export const DELIVERY_TIME_SLOTS = [
  {
    value: '10AM-12PM',
    title: '10am - 12pm',
  },
  {
    value: '12PM-14PM',
    title: '12pm - 02pm',
  },
  {
    value: '14PM-16PM',
    title: '02pm - 04pm',
  },
  {
    value: '16PM-18PM',
    title: '04pm - 06pm',
  },
  {
    value: '18PM-20PM',
    title: '06pm - 08pm',
  },
];

export const CATEGORY_DEFAULT_IMAGE = 'https://dhoomak.com/a/img/logo.png';
export const PRODUCTS_DEFAULT_IMAGE = 'https://dhoomak.com/a/img/logo.png';
export const DHOOMAK_ICON = 'https://dhoomak.com/a/img/logo.png';
export const SUBSCRIPTION_AMOUNT = 999;

export const RPAY_KEY_ID = "rzp_test_KjGawLZnYS2OVg";
export const RPAY_KEY_SECRET = "j82QLAPPenMlJibin0A8AziT";

export const SUBSCRIPTION_AMOUNTS = {
  BASE: 819.18,
  GST: 179.82,
  BASE_WITH_GST: 999.00,
}
