import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
// import IMAGES from '../../../assets/images';
// import { removeAsyncStorageItem } from '../../../utils/async-storage';
// import { logout } from '../../auth/reducers/auth-reducer';
// import { ASYNC_STORAGE_KEY } from '../../../data/constant';
import COLORS from '../../../utils/color';
import { logoutAction } from '../../auth/thunks/auth-thunk';


export default function UserIcon({ className = '' }) {
    const dispatch = useDispatch();

    async function handleIcon() {
        dispatch(logoutAction());
    }

    return (
        <TouchableOpacity className={`bg-white rounded-full mr-4 p-1 ${className}`} onPress={handleIcon}>
            {/* <Image source={IMAGES.userIcon} className='w-8 h-8' style={{ resizeMode: 'contain' }} /> */}
            <Icon name={'log-out'} size={28} color={COLORS.black} />
        </TouchableOpacity>
    );
}
