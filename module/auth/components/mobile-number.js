import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import commonStyles from '../../../common/styles';
import STRINGS from '../../../utils/strings';
import FilledButton from '../../../common/button';
import useAppNavigation from '../../../common/hooks/use-app-navigation';
import {toast} from '../../../utils/toast';
import {useDispatch} from 'react-redux';
import {sendOtpAction} from '../../../axios/https';

export default function MobileNumber() {
  const dispatch = useDispatch();

  const [mobNumber, setMobNumber] = useState('');
  const [navigation, SCREEN] = useAppNavigation();
  const handleLoginClick = () => {
    if (mobNumber.length !== 10) {
      toast('Enter Valid Number');
      return;
    }
    dispatch(sendOtpAction({phone: mobNumber, navigation, SCREEN}));
  };
  return (
    <View
      className="w-full p-5 bg-white rounded-xl shadow-lg"
      style={commonStyles.shadow}>
      <Text className="text-base font-bold text-left mb-6 text-black">
        {STRINGS.enterNumberAndLogin}
      </Text>
      <TextInput
        className="border border-grey rounded-md p-1 px-3 mb-4 text-black text-base"
        keyboardType="numeric"
        placeholder={STRINGS.loginTextPlaceholder}
        value={mobNumber}
        onChangeText={text => setMobNumber(text)}
        maxLength={10}
      />
      <FilledButton text={STRINGS.enterOtp} onPress={handleLoginClick} />
    </View>
  );
}
