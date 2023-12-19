export const isValidEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhoneNumber = phoneNumber => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phoneNumber);
};
export const isZipValid = zip => {
  const pinRegex = /^\d{6}$/;
  return pinRegex.test(zip);
};
