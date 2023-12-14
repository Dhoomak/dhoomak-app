import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import IMAGES from '../../../assets/images';
import { removeAsyncStorageItem } from '../../../utils/async-storage';
import { useDispatch } from 'react-redux';
import { logout } from '../../auth/reducers/auth-slice';
import { ASYNC_STORAGE_KEY } from '../../../data/constant';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../../utils/color';


export default function UserIcon({ className = '' }) {
    const dispatch = useDispatch();

    async function handleIcon() {
        dispatch(logout());
        await removeAsyncStorageItem(ASYNC_STORAGE_KEY.IS_LOGGED_IN);
        await removeAsyncStorageItem(ASYNC_STORAGE_KEY.USER_DATA);
        await removeAsyncStorageItem(ASYNC_STORAGE_KEY.AUTH_TOKEN);
    }

    return (
        <TouchableOpacity className={`bg-white rounded-full mr-4 p-1 ${className}`} onPress={handleIcon}>
            {/* <Image source={IMAGES.userIcon} className='w-8 h-8' style={{ resizeMode: 'contain' }} /> */}
            <Icon name={'log-out'} size={28} color={COLORS.black} />
        </TouchableOpacity>
    );
}
