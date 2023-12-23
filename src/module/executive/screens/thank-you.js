import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import FilledButton from '../../../common/button';
import IonIcon from 'react-native-vector-icons/Ionicons'
import COLORS from '../../../utils/color';
import ResponseModalWrapper from '../../../common/wrappers/response-modal-wrapper';

const ThankYou = ({ navigation, route }) => {
  useEffect(() => {
    const id = setTimeout(() => {
      navigation.popToTop();
    }, 3000);

    () => { clearTimeout(id) }
  }, [])

  function handleBackToHome() {
    navigation.popToTop();
  }

  return (
    <ResponseModalWrapper
      title='On boarding Successful'
      description='Go back to the home screen for next on boarding'
    >
      <FilledButton
        text='Go To Home'
        onPress={handleBackToHome}
        key={"go to home button"}
        btnProps={{ className: 'px-3' }}
      />
    </ResponseModalWrapper >
  );
};

export default ThankYou;
