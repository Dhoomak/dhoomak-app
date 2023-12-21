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

export const dateFormatter = timestamp => {
  const dateObject = new Date(timestamp);
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();
  const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${
    day < 10 ? '0' : ''
  }${day}`;
  return formattedDate;
};
