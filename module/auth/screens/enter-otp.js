import React from 'react';
import { View, Text } from 'react-native';
import AuthUiWrapper from '../components/auth-ui-wrapper';
import EnterOtp from '../components/otp-number';

export default function EnterOtpScreen({ navigation, route }) {
    const { mobileNumber } = route.params;

    return (
        <AuthUiWrapper>
            <EnterOtp mobileNumber={mobileNumber} />
        </AuthUiWrapper>
    );
}
