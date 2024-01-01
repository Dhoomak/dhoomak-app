import { View, Text, Share, Alert, Image, TouchableOpacity, } from "react-native";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";

import IMAGES from "../../assets/images";
import { IonIcon } from "../../utils/icons";
import COLORS from "../../utils/color";
import { COMMON, USER } from "../../utils/strings/screen-name";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../module/auth/thunks/auth-thunk";

const UserCustomDrawer = (props) => {
    const dispatch = useDispatch();


    const handleShareApp = async () => {
        console.log('invite a friend');
        try {
            const result = await Share.share({
                message:
                    'Dhoomak is a app which fills your empty kitchen containers fill automatically by setting your inventory. Download our app now.',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    console.log(result)
                    // shared with activity type of result.activityType
                } else {
                    console.log('share')
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                console.log('dismissed')
                // dismissed
            }
        } catch (error) {
            Alert.alert(error.message);
        }
    }
    const handleLogout = () => {
        dispatch(logoutAction());
    }

    return (
        <View className='flex-1 bg-white'>
            <DrawerContentScrollView {...props}>
                <View className='p-3 border-b border-grey' >
                    <Text className='text-black font-semibold text-lg'>Restaurant Name</Text>
                    <Text className='text-black font-normal text-13'>Owner Name</Text>
                </View>

                <View className='flex-1 pt-2'>
                    <DrawerItemList {...props} />
                    <DrawerItem
                        pressOpacity={0}
                        label='Profile'
                        labelStyle={{
                            marginLeft: -25,
                            fontSize: 14,
                        }}
                        onPress={() => props.navigation.navigate(USER.PROFILE)}
                        icon={({ color, focused }) => (<IonIcon name={focused ? 'person' : 'person-outline'} color={color} size={16} />)}
                    />
                    <DrawerItem
                        label='Order History'
                        labelStyle={{
                            marginLeft: -25,
                            fontSize: 14,
                        }}
                        onPress={() => props.navigation.navigate(USER.TOP_TAB, { screen: USER.ORDER_HISTORY })}
                        icon={({ color, focused }) => (<IonIcon name={focused ? 'bag-check' : 'bag-check-outline'} color={color} size={16} />)}
                    />
                    <DrawerItem
                        label='Call Assistant'
                        labelStyle={{
                            marginLeft: -25,
                            fontSize: 14,
                        }}
                        onPress={() => props.navigation.navigate(USER.PROFILE)}
                        icon={({ color, focused }) => (<IonIcon name={focused ? 'headset' : 'headset-outline'} color={color} size={16} />)}
                    />
                    <DrawerItem
                        label='Terms of Use'
                        labelStyle={{
                            marginLeft: -25,
                            fontSize: 14,
                        }}
                        onPress={() => props.navigation.navigate(COMMON.TERMS_CONDITION)}
                        icon={({ color, focused }) => (<IonIcon name={focused ? 'document-text' : 'document-text-outline'} color={color} size={16} />)}
                    />
                    <DrawerItem
                        label='Privacy Policy'
                        labelStyle={{
                            marginLeft: -25,
                            fontSize: 14,
                        }}
                        onPress={() => props.navigation.navigate(COMMON.PRIVACY)}
                        icon={({ color, focused }) => (<IonIcon name={focused ? 'newspaper' : 'newspaper-outline'} color={color} size={16} />)}
                    />
                    <DrawerItem
                        label='About Us'
                        labelStyle={{
                            marginLeft: -25,
                            fontSize: 14,
                        }}
                        onPress={() => props.navigation.navigate(USER.PROFILE)}
                        icon={({ color, focused }) => (<IonIcon name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={16} />)}
                    />
                </View>
            </DrawerContentScrollView>

            {/* Share, Logout Button */}
            <View className='border-y border-grey p-2'>
                <TouchableOpacity onPress={handleShareApp} className=' p-1 rounded-md mb-2'>
                    <View className='flex-row items-center'>
                        <IonIcon name="share-social-outline" size={16} className='mr-2' />
                        <Text className='text-sm text-black'>Tell a Friend</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLogout} className='p-1 rounded-md'>
                    <View className='flex-row items-center'>
                        <IonIcon name="log-out-outline" size={16} className='mr-2' />
                        <Text className='text-sm text-black'>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* Our message to restaurant */}
            <View className='border-y border-grey p-2'>
                <Text className='text-center italic text-13'>"Our message"</Text>
            </View>

            {/* Made With Love by Dhoomak */}
            <View className='p-2 pb-0 flex-row items-center'>
                <View className='h-full'>
                    <Image className='h-16 aspect-square' style={{ resizeMode: 'contain' }} source={IMAGES.dhoomakIcon} />
                </View>
                <View className=' p-1 rounded-md flex-1'>
                    <View className='flex-row items-center justify-end'>
                        <Text className='text-lg font-black text-black'>Made With </Text>
                        <IonIcon name="heart" size={22} color={COLORS.red} />
                    </View>
                    <Text className='text-sm text-secondary text-right'>by Dhoomak </Text>
                </View>
            </View>
        </View>
    );
}

export default UserCustomDrawer