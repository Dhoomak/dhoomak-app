import React from 'react';
import { View, Image } from 'react-native';
import IMAGES from '../../../assets/images';


export default function AuthUiWrapper({ children }) {
    return (
        <View className='w-full flex-1 items-center justify-center bg-grey p-4'>
            <Image className='w-48 h-32 mb-8' style={{ resizeMode: 'contain' }} source={IMAGES.logo} />
            {children}
        </View>
    );
}
