import { View, Text } from 'react-native';
import React from 'react';
import OtpNumberExecutive from '../components/otp-ecexcutive';
import { useRoute } from '@react-navigation/native';
import AuthUiWrapper from '../../auth/components/auth-ui-wrapper';

const VerificationOTP = () => {
  const route = useRoute();
  const {
    data,
    profileId = '',
    userId = '',
    uid = '',
  } = route.params || {};

  return (
    <>
      <OtpNumberExecutive mobileNumber={data.mobileNo} uid={uid} profileId={profileId} userId={userId} />
    </>
  );
};

export default VerificationOTP;
