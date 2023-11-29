import React, { useEffect } from 'react';
import { Image, SafeAreaView } from 'react-native';
import IMAGES from '../../../assets/images';
import { USER } from '../../../utils/strings/screen-name';

export default function SplashScreen({ navigation }) {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace(USER.HOME);
    }, 2000);
  }, []);

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white">
      <Image className='w-48 h-32 mb-6' style={{ resizeMode: 'contain' }} source={IMAGES.logo} />
    </SafeAreaView>
  );
}
