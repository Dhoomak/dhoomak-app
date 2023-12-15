import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import commonStyles from '../../../common/styles';

function CircleNavigationIcon({ title, image, disabled, iconProps }) {
    return (
        <View className='m-1 flex items-center'>
            <TouchableOpacity
                style={[styles.roundButton, commonStyles.shadow]}
                className={`bg-primary border-2 border-white shadow-lg mb-1 ${disabled ? 'bg-grey' : 'bg-primary'}`}
                {...iconProps}
            >
                <Image source={image} style={styles.image} />
            </TouchableOpacity>
            <Text className="text-11 text-black">{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    roundButton: {
        width: 60,
        height: 60,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 40,
        width: 40,
        resizeMode: "contain"
    }

});

export default CircleNavigationIcon;