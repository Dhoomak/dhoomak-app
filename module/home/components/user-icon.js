import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import IMAGES from '../../../assets/images';

export default function UserIcon() {
    return (
        <TouchableOpacity className='bg-white rounded-full'>
            <Image source={IMAGES.userIcon} className='w-8 h-8' style={{ resizeMode: 'contain' }} />
        </TouchableOpacity>
    );
}
