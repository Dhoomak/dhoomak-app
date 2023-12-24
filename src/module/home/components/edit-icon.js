import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../../utils/color';
import useAppNavigation from '../../../common/hooks/use-app-navigation';

export default function EditIcon(props) {
    const { style = [] } = props;

    const [navigation, SCREEN] = useAppNavigation();

    const handleEdit = () => {
        navigation.replace(SCREEN.USER.ADD_ITEMS);
    }

    return (
        <TouchableOpacity className={`bg-white rounded-full mr-0 p-2`} style={style} onPress={handleEdit}>
            <Icon name="create-outline" size={20} color={COLORS.black} />
        </TouchableOpacity>
    );
}
