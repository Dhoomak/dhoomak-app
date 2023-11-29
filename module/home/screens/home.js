import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import IMAGES from '../../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../../../utils/color';
import Slider from '../../../common/slider';
import { navigation } from '../../../data/data';
import NavigationCard from '../components/navigation-card';



export default function Home() {
  const bannerImgList = [IMAGES.banner.banner1, IMAGES.banner.banner2, IMAGES.banner.banner3];
  return (
    <>
      <View className='flex-1'>
        {/* Order Details Section */}
        <View className='w-full bg-white px-4 py-2 flex-row '>
          <View className='flex-1'>
            <View className='justify-center flex flex-1 items-start'>
              <Text className='font-semibold text-sm text-red mb-2'>Next Order Scheduled</Text>
              <TouchableOpacity className='bg-secondary rounded-md px-3 py-1 shadow-md mb-2 border-white border' style={styles.shadow}>
                <Text className='text-sm text-white font-semibold'>31 Dec 2023</Text>
              </TouchableOpacity>
              <Text className='font-semibold text-xs'>10:30 AM | Tuesday </Text>
            </View>
          </View>
          <View className='w-0.5 h-full bg-secondary mx-1' />
          <View className='flex-1 p-2'>
            <Image source={IMAGES.groceryBasketImg} className='w-full h-28' resizeMode={'contain'} />
          </View>
        </View>

        {/* Slider Section */}
        <LinearGradient colors={[COLORS.red, COLORS.primary]} angle={135} className='p-4'>
          <View className='h-24 rounded-lg overflow-hidden'>
            <Slider images={bannerImgList} />
          </View>
        </LinearGradient>

        {/* Options */}
        <View className='bg-grey p-4 flex justify-center items-center' >
          <ScrollView
            contentContainerStyle={styles.contentContainerStyle} showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            {
              navigation.map((item) => (
                <View key={item.id} style={{ width: '47%' }}>
                  <NavigationCard item={item} />
                </View>
              ))
            }
          </ScrollView>
        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  shadow: {
    overflow: 'hidden',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  contentContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  }
})