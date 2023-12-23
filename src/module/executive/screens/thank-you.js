import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import FilledButton from '../../../common/button';
import IonIcon from 'react-native-vector-icons/Ionicons'
import COLORS from '../../../utils/color';

const ThankYou = ({ navigation, route }) => {
  const { userId } = route.params;
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
    <View className='justify-center items-center flex-1 bg-white'>
      {/* <IonIcon  /> */}
      <View className='mb-4'>
        <IonIcon name="checkmark-circle" size={100} color={COLORS.secondary} />
      </View>
      {/* <Text className='text-xl mb-3 text-secondary font-bold'>ThankYou</Text> */}
      <Text className='text-sm mb-1 text-black font-medium'>User's Inventory has been created Successfully!!!</Text>

      <Text className='text-sm mb-5 text-black '>User Id : {userId}</Text>
      <FilledButton
        text='Go To Home'
        onPress={handleBackToHome}
        key={"go to home button"}
        btnProps={{ className: 'px-3' }}
      />
    </View>
  );
};

export default ThankYou;
