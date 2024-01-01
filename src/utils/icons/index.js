import Ionicon from "react-native-vector-icons/Ionicons";
import { View } from "react-native";

// Utils
import COLORS from "../color";

export const IonIcon = (props) => {
    const {
        name = 'checkmark-circle-outline',
        size = 16,
        color = COLORS.black,
        ...rest
    } = props;

    const { style = {}, ...extraRest } = rest || {};
    return (
        <View style={style} {...extraRest} className='justify-center items-center'>
            <Ionicon name={name} size={size} color={color} />
        </View>
    )
}