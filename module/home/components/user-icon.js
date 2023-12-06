import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import IMAGES from '../../../assets/images';
import { removeAsyncStorageItem } from '../../../utils/async-storage';

export default function UserIcon() {

    async function handleIcon() {
        await removeAsyncStorageItem('isLoggedIn');
    }

    return (
        <TouchableOpacity className='bg-white rounded-full' onPress={handleIcon}>
            <Image source={IMAGES.userIcon} className='w-8 h-8' style={{ resizeMode: 'contain' }} />
        </TouchableOpacity>
    );
}
