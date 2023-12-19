import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

const ThankYou = ({ navigation }) => {

  useEffect(() => {
    const id = setTimeout(() => {
      navigation.popToTop();
    }, 4000);

    () => { clearTimeout(id) }
  }, [])

  return (
    <View className='justify-center items-center flex-1 bg-white'>
      <Text className='text-xl mb-3 text-secondary font-bold'>ThankYou</Text>
      <Text className='text-sm text-black font-medium'>Your Inventory has been created Successfully!!!</Text>
    </View>
  );
};

export default ThankYou;
