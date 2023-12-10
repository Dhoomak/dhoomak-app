import React from 'react';
import AuthUiWrapper from '../components/auth-ui-wrapper';
import EnterOtp from '../components/otp-number';

export default function EnterOtpScreen({ route }) {
    const { mobileNumber } = route.params;

    return (
        <AuthUiWrapper>
            <EnterOtp mobileNumber={mobileNumber} />
        </AuthUiWrapper>
    );
}
