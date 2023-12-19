import {View, Text} from 'react-native';
import React from 'react';
import OtpNumberExecutive from '../components/otp-ecexcutive';
import {useRoute} from '@react-navigation/native';
import AuthUiWrapper from '../../auth/components/auth-ui-wrapper';

const VerificationOTP = () => {
  const route = useRoute();
  const {data, uid} = route.params;
  // console.log(data, 'data');
  console.log(uid, 'yeh hamara uid');
  return (
    <>
      <OtpNumberExecutive mobileNumber={data.mobileNo} uid={uid} />
    </>
  );
};

export default VerificationOTP;
