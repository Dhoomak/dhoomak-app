import React from 'react';
import AuthUiWrapper from '../components/auth-ui-wrapper';
import EnterOtp from '../components/otp-number';

export default function EnterOtpScreen({ route }) {
    const { phoneNumber } = route.params;

    return (
        <AuthUiWrapper>
            <EnterOtp phoneNumber={phoneNumber} />
        </AuthUiWrapper>
    );
}
