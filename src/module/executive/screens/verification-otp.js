import { View, Text } from 'react-native'
import React from 'react'
import OtpNumberExecutive from '../components/otp-ecexcutive'
import {useRoute} from '@react-navigation/native';
import AuthUiWrapper from '../../auth/components/auth-ui-wrapper';

const VerificationOTP = () => {
    const route = useRoute();
  const {data} = route.params;
  return (
    <>
      <OtpNumberExecutive mobileNumber={data.mobileNo}/>
    </>
  )
}

export default VerificationOTP