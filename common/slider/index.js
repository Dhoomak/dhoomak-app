import React from 'react';
import ImageSlider from 'react-native-image-slider';
import { View, Image } from 'react-native';

export default function Slider(props) {
    const {
        images = [],
    } = props;
    return (
        <ImageSlider
            images={images}
            loopBothSides
            autoPlayWithInterval={2000}
            customSlide={({ index, item, style, width }) => (
                <View key={index} style={[style]} className='w-full h-20' >
                    <Image source={item} className='w-full h-full' />
                </View>
            )}
        />
    );
}
