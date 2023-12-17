import React, { useEffect } from 'react';
// import { Image, SafeAreaView } from 'react-native';
// import IMAGES from '../../../assets/images';
import { AUTH } from '../../../utils/strings/screen-name';
import useCheckLogin from '../hooks/use-check-login';
import AuthUiWrapper from '../components/auth-ui-wrapper';

export default function SplashScreen({ navigation }) {
    var { isLoggedIn } = useCheckLogin();

    useEffect(() => {
        setTimeout(() => {
            // console.log(isLoggedIn)
            // console.log(typeof isLoggedIn)
            if (isLoggedIn !== true && isLoggedIn === null && isLoggedIn === '') {
                navigation.navigate(AUTH.LOGIN);
                // console.log('USER NOT LOGGED IN SPLASH SCREEN')
            } else {
                // console.log('USER LOGGED IN SPLASH SCREEN')
            }
        }, 1000);
    });

    return (<AuthUiWrapper>{ }</AuthUiWrapper>);
}
