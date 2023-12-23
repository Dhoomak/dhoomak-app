import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import ResponseModalWrapper from '../../../common/wrappers/response-modal-wrapper';
import COLORS from '../../../utils/color';
import FilledButton from '../../../common/button';
import { toast } from '../../../utils/toast';
import { USER } from '../../../utils/strings/screen-name';

export default function PaymentFailModal({ route, navigation }) {
    const {
        title = title || "Oops, we're sorry",
        description = description || "Kindly press on 'Retry Now' to complete the process.",
    } = route.params || {};

    function handleBackToHome() {
        navigation.popToTop();
    }

    function handleRetryNow() {
        navigation.navigate(USER.PAYMENT, { defaultSelectedPaymentOptionIndex: 1 });
    }

    return (
        <ResponseModalWrapper
            iconName="close-circle"
            iconColor={COLORS.red}
            title={title}
            description={description}
        >
            <View className='flex flex-row gap-2'>
                <FilledButton
                    text='Go To Home'
                    onPress={handleBackToHome}
                    key={"go to home button"}
                    btnProps={{ className: 'px-3' }}
                />
                <FilledButton
                    text='Retry Now'
                    onPress={handleRetryNow}
                    key={"retry now button"}
                    btnProps={{ className: 'px-3' }}
                />
            </View>
        </ResponseModalWrapper>
    );
}
