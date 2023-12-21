import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import IMAGES from '../../../assets/images';
import {scale} from '../../../utils/scale';

const Notification = () => {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.comingSoon} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: scale(200), // Adjust the width as needed
    height: scale(200), // Adjust the height as needed
  },
});

export default Notification;
