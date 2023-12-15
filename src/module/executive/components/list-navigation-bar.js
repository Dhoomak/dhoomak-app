import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import commonStyles from '../../../common/styles';

function ListNavigationBar({ title, image, containerProps }) {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            className="p-4 mx-4 my-3 bg-white rounded-lg shadow-lg flex flex-row justify-between items-center"
            style={commonStyles.shadow}
            {...containerProps}
        >
            <Text className="text-black text-lg font-medium">{title}</Text>
            <Image source={image} style={styles.image} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 40,
        width: 40,
        resizeMode: "contain"
    }
});

export default ListNavigationBar;