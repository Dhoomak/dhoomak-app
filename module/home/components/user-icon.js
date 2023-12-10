import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import IMAGES from '../../../assets/images';
import { removeAsyncStorageItem } from '../../../utils/async-storage';
import { useDispatch } from 'react-redux';
import { logout } from '../../auth/reducers/auth-slice';

export default function UserIcon() {
    const dispatch = useDispatch();
    async function handleIcon() {
        dispatch(logout());
        await removeAsyncStorageItem('isLoggedIn');
    }

    return (
        <TouchableOpacity className='bg-white rounded-full' onPress={handleIcon}>
            <Image source={IMAGES.userIcon} className='w-8 h-8' style={{ resizeMode: 'contain' }} />
        </TouchableOpacity>
    );
}
