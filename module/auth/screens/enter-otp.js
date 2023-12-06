import React from 'react';
import { View, Text } from 'react-native';
import AuthUiWrapper from '../components/auth-ui-wrapper';
import EnterOtp from '../components/enter-otp';

export default function EnterOtpScreen({ navigation, route }) {
    const { mobileNumber } = route.params;

    console.log(route);

    return (
        <AuthUiWrapper>
            <EnterOtp mobileNumber={mobileNumber} />
        </AuthUiWrapper>
    );
}
