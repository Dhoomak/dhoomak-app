import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, } from 'react-redux';

// components
import Slider from '../../../common/slider';
import NavigationCard from '../components/navigation-card';

// reducer(s) / thunk(s)
import { getCategoryListAction } from '../../category/thunks/category-thunk';

// utils
import IMAGES from '../../../assets/images';
import COLORS from '../../../utils/color';

// data
import { homeBanners, navigations } from '../../../data/data';
import HomeHeader from '../components/home-header';
import DhoomakScrollView from '../../../common/components/dhoomak-scrollview';
import { getSubscriptionDetailsAction } from '../thunks/subscription-thunk';
import { getAsyncStorageObjectItem } from '../../../utils/async-storage';
import { ASYNC_STORAGE_KEY } from '../../../data/constant';


export default function Home({ route }) {
  const {userId = ''} = route.params
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryListAction({}));
    (async () => {
      const userdata = await getAsyncStorageObjectItem(ASYNC_STORAGE_KEY.USER_DATA);
      console.log(userdata._id);

      dispatch(getSubscriptionDetailsAction({ userId: userId ? userId : userdata._id }));
      // TODO: Add Profile Details API
    })()
  }, [])

  return (
    <>
      <ScrollView className='flex-1 bg-grey'>
        {/* Order Details Section */}
        <HomeHeader />

        {/* Slider Section */}
        <LinearGradient colors={[COLORS.red, COLORS.primary]} angle={135} className='p-4'>
          <View className='h-24 rounded-lg overflow-hidden'>
            <Slider images={homeBanners} />
          </View>
        </LinearGradient>

        {/* Options */}
        <View className='bg-grey p-4 flex justify-center items-center' >
          <DhoomakScrollView
            contentContainerStyle={styles.contentContainerStyle}
          >
            {
              navigations.map((item) => (
                <View key={item.id} style={{ width: '47%' }}>
                  <NavigationCard item={item} />
                </View>
              ))
            }
          </DhoomakScrollView>
        </View>

      </ScrollView>
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