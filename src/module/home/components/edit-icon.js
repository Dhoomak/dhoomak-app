import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../../utils/color';
import useAppNavigation from '../../../common/hooks/use-app-navigation';

export default function EditIcon({ className = '' }) {
    const [navigation, SCREEN] = useAppNavigation();

    const handleEdit = () => {
        navigation.replace(SCREEN.USER.ADD_ITEMS);
    }

    return (
        <TouchableOpacity className={`bg-primary rounded-full mr-4 p-2 ${className}`} onPress={handleEdit}>
            <Icon name="create-outline" size={20} color={COLORS.black} />
        </TouchableOpacity>
    );
}
