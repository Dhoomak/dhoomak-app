import React, { useEffect } from 'react';
import { Image, SafeAreaView } from 'react-native';
import IMAGES from '../../../assets/images';
import { AUTH } from '../../../utils/strings/screen-name';
import useCheckLogin from '../hooks/use-check-login';

export default function SplashScreen({ navigation }) {
    var { isLoggedIn } = useCheckLogin();

    useEffect(() => {
        setTimeout(() => {
            // console.log(isLoggedIn)
            // console.log(typeof isLoggedIn)
            if (isLoggedIn !== true && isLoggedIn !== null && isLoggedIn !== '') {
                navigation.navigate(AUTH.LOGIN);
                // console.log('USER NOT LOGGED IN SPLASH SCREEN')
            } else {
                // console.log('USER LOGGED IN SPLASH SCREEN')
            }
        }, 2000);
    });


    return (
        <SafeAreaView className="flex-1 justify-center items-center bg-white">
            <Image className='w-48 h-32 mb-6' style={{ resizeMode: 'contain' }} source={IMAGES.logo} />
        </SafeAreaView>
    );
}
