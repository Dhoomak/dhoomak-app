import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import ResponseModalWrapper from '../../../common/wrappers/response-modal-wrapper';
import FilledButton from '../../../common/button';

export default function PaymentDoneModal({ route, navigation }) {
    const {
        title = "" || "Payment Completed!!!",
        description = "",
    } = route.params || {};

    useEffect(() => {
        const id = setTimeout(() => {
            navigation.popToTop();
        }, 2000);

        () => { clearTimeout(id) }
    }, [])

    function handleBackToHome() {
        navigation.popToTop();
    }

    return (
        <ResponseModalWrapper
            iconName="checkmark-circle"
            iconSize={100}
            title={title}
            description={description}
        >
            <FilledButton
                text='Go To Home'
                onPress={handleBackToHome}
                key={"go to home button"}
                btnProps={{ className: 'px-3' }}
            />
        </ResponseModalWrapper>
    );
}
