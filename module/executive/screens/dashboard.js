import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function ExecutiveDashboard() {
    return (
        <>
            <View style={styles.container}>
                <Text>Dashboard of Executive</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})