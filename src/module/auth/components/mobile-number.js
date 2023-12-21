import React, { memo, useCallback, useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import commonStyles from '../../../common/styles';
import STRINGS from '../../../utils/strings';
import FilledButton from '../../../common/button';
import useAppNavigation from '../../../common/hooks/use-app-navigation';
import { toast } from '../../../utils/toast';
import { useDispatch } from 'react-redux';
import { sendOtpAction } from '../thunks/auth-thunk';
import COLORS from '../../../utils/color';
// import { ScrollView } from 'react-native-gesture-handler';

function MobileNumber() {
  const dispatch = useDispatch();
  const [mobNumber, setMobNumber] = useState('');
  const [navigation, SCREEN] = useAppNavigation();

  const handleLoginClick = () => {
    if (mobNumber.length !== 10) {
      toast('Enter Valid Number');
      return;
    }
    dispatch(sendOtpAction({ phoneNumber: mobNumber, navigation, SCREEN }));
  };

  return (
    <KeyboardAvoidingView
      className="w-full"
      behavior='height'
    >
      <View className='p-5 bg-white rounded-xl shadow-lg' style={commonStyles.shadow}>
        <Text className="text-base font-bold mb-6 text-black text-center">
          {STRINGS.enterNumberAndLogin}
        </Text>
        <TextInput
          className="border border-grey rounded-md p-1 px-3 mb-4 text-black text-base"
          keyboardType="numeric"
          placeholder={STRINGS.loginTextPlaceholder}
          value={mobNumber}
          onChangeText={text => setMobNumber(text)}
          maxLength={10}
          placeholderTextColor={COLORS.lightGrey}
        />
        <FilledButton text={STRINGS.enterOtp} onPress={handleLoginClick} />
      </View>
    </KeyboardAvoidingView>
  );
}

export default memo(MobileNumber)