import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import commonStyles from '../../../common/styles';
import STRINGS from '../../../utils/strings';
import FilledButton from '../../../common/button';
// import useAppNavigation from '../../../common/hooks/use-app-navigation';
import {toast} from '../../../utils/toast';
import COLORS from '../../../utils/color';
import {useDispatch} from 'react-redux';

import {useRoute} from '@react-navigation/native';
import {verifyOtpAction} from '../../../axios/https';
// import { setAsyncStorageItem } from '../../../utils/async-storage';

const OTP_LENGTH = 4;

export default function OtpNumber({mobileNumber = '',navigation}) {
  const dispatch = useDispatch();
  const [otpValue, setOtpValue] = useState('');
  const route = useRoute();
  const {phoneNumber} = route.params;

  console.log(typeof phoneNumber);
  const handleVerifyOtp = async () => {
    if (otpValue.length !== OTP_LENGTH) {
      console.log('Invalid OTP Length');
      toast('Please Enter Full OTP');
      return;
    }
    dispatch(verifyOtpAction({phone: phoneNumber, otp: otpValue}));
    console.log('verifyOtpAction dispatched...');
    console.log("alling")

  };

  return (
    <View
      className="w-full p-5 bg-white rounded-xl shadow-lg"
      style={commonStyles.shadow}>
      <Text className="text-base font-bold text-left mb-6 text-black">
        {STRINGS.enterOtpAndVerify} {mobileNumber}
      </Text>
      <View className="pb-4 px-4">
        <OTPTextView
          inputCount={OTP_LENGTH}
          tintColor={COLORS.red}
          offTintColor={COLORS.grey}
          handleTextChange={setOtpValue}
          textInputStyle={{
            borderWidth: 1,
            borderBottomWidth: 1,
            borderRadius: 10,
            fontSize: 16,
            fontWeight: '400',
          }}
        />
      </View>
      <FilledButton text={STRINGS.verifyOtp} onPress={handleVerifyOtp} />
    </View>
  );
}
