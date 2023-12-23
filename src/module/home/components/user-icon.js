import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../../utils/color';
import { logoutAction } from '../../auth/thunks/auth-thunk';

export default function UserIcon({ className = '' }) {
    const dispatch = useDispatch();

    async function handleIcon() {
        dispatch(logoutAction());
    }

    return (
        <TouchableOpacity className={`bg-white rounded-full mr-4 p-1 ${className}`} onPress={handleIcon}>
            <Icon name={'log-out'} size={24} color={COLORS.black} />
        </TouchableOpacity>
    );
}
