import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import IMAGES from '../../../assets/images';
import { scale } from '../../../utils/scale';
import COLORS from '../../../utils/color';

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
    backgroundColor: COLORS.magnolia,
  },
  image: {
    width: scale(200),
    height: scale(200),
  },
});

export default Notification;
