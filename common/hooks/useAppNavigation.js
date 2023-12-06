import { useNavigation } from '@react-navigation/native';
import * as SCREEN from '../../utils/strings/screen-name';


export default function useAppNavigation() {
    const navigation = useNavigation();

    return [navigation, SCREEN];
}
