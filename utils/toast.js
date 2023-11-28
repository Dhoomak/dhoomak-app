import { ToastAndroid } from 'react-native';

function toast(msg, time = ToastAndroid.SHORT, position = ToastAndroid.BOTTOM) {
    console.log('Toast:', msg);
    return ToastAndroid.show(msg, time, position);
}


export { toast };