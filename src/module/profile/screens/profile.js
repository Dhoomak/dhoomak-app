import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import IMAGES from '../../../assets/images';
import COLORS from '../../../utils/color';
import Icon from 'react-native-vector-icons/Ionicons';
import { getAsyncStorageObjectItem } from '../../../utils/async-storage';
import { ASYNC_STORAGE_KEY } from '../../../data/constant';
import commonStyles from './../../../common/styles/index';
import FilledButton from '../../../common/button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProfileAction, getProfileDetailsAction } from '../thunks/profile-thunks';
// import { deleteProfileApi } from '../api/profile-api';
import { getProfileState } from './../reducers/profile-reducer';

const Profile = () => {
    const dispatch = useDispatch();
    const { profileData = {} } = useSelector(getProfileState)
    console.log('PROFILE DATA: ', profileData)
    const {
        _id = '',
        phoneNumber = '',
        email = '',
        name = '',
        gstNo = '',
        panNo = '',
        restaurantId = '',
        managerName = '',
        user = '',
        type = '',
        address: {
            city = '',
            zipcode = '',
            street = '',
        } = {},
        images: [img = ''] = []
    } = profileData;

    const userProfileData = [
        {
            icon: 'person-outline',
            title: 'User Name',
            data: managerName || name,
        },
        {
            icon: 'mail-outline',
            title: 'Email',
            data: email,
        },
        {
            icon: 'call-outline',
            title: 'Number',
            data: phoneNumber,
        },
        {
            icon: 'location-outline',
            title: 'Address',
            data: `${street}, ${city} - ${zipcode}`,
        },
    ]

    const handleDelete = useCallback(() => {
        (async () => {
            const userdata = await getAsyncStorageObjectItem(ASYNC_STORAGE_KEY.USER_DATA);
            dispatch(deleteProfileAction({ userId: userdata._id }));
        })();
    }, [])

    useEffect(() => {
        (async () => {
            const userdata = await getAsyncStorageObjectItem(ASYNC_STORAGE_KEY.USER_DATA);
            dispatch(getProfileDetailsAction({ userId: userdata._id }));
        })();

        () => { }
    }, [])

    return (
        <View className='flex-1 bg-magnolia p-4'>
            <View className='flex-1'>
                <View className='mb-4'>
                    <View className='mb-2'>
                        <TouchableOpacity activeOpacity={0.8} className='w-2/5 aspect-square rounded-full shadow-lg border-2 border-grey bg-white overflow-hidden mx-auto' style={commonStyles.shadow}>
                            <Image source={IMAGES.userIcon} className='w-full h-full ' />
                        </TouchableOpacity>
                    </View>
                    <Text className='text-black text-center text-xl font-semibold mb-1'>{name}</Text>
                    <Text className="text-red text-center">
                        Id : {restaurantId || _id}
                    </Text>
                </View>

                <View className="flex flex-1">
                    {
                        userProfileData.map((data) => (
                            <React.Fragment key={data.title}>
                                <View className='flex-row w-full text-sm border-b-[0.5px] p-2 border-black'>
                                    <View className='justify-center items-center'>
                                        <Icon name={data.icon} size={18} color={COLORS.black} />
                                    </View>
                                    <Text className=" flex-1 text-black pl-3">
                                        {data.data}
                                    </Text>
                                </View>
                            </React.Fragment>
                        ))
                    }
                </View>

                <FilledButton
                    text='Delete Account'
                    btnProps={{ className: 'bg-transparent border-black border-[1px] py-1' }}
                    textProps={{ className: 'bg-transparent text-black' }}
                    onPress={handleDelete}
                />
            </View>
        </View >
    );
};

export default Profile;

