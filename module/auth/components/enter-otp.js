import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import OTPTextView from 'react-native-otp-textinput';

import commonStyles from '../../../common/styles';
import STRINGS from '../../../utils/strings';
import FilledButton from '../../../common/button';
import useAppNavigation from '../../../common/hooks/useAppNavigation';
import { toast } from '../../../utils/toast';

export default function EnterOtp({ mobileNumber = '' }) {
    const [otpNumber, setOtpNumber] = useState('');
    const [navigation, SCREEN] = useAppNavigation();

    const handleVerifyOtp = () => {
        if (otpNumber.length !== 10) {
            toast("Please Enter Full OTP");
            return;
        }
        navigation.navigate(SCREEN.AUTH.ENTER_OTP, {
            mobileNumber: otpNumber,
        });
    }

    return (
        <View className='w-full p-5 bg-white rounded-xl shadow-lg' style={commonStyles.shadow}>
            <Text className='text-base font-bold text-left mb-6 text-black'>{STRINGS.enterOtpAndVerify} {mobileNumber}</Text>
            {/* <TextInput
                className='border border-grey rounded-md p-1 px-3 mb-4 text-black'
                keyboardType='numeric'
                placeholder={STRINGS.loginTextPlaceholder}
                value={otpNumber}
                onChangeText={(text) => setOtpNumber(text)}
                maxLength={10}
            /> */}
            <OTPTextView inputCount={4} />
            <FilledButton text={STRINGS.verifyOtp} onPress={handleVerifyOtp} />
        </View>
    );
}
