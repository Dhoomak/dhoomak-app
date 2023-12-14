import React from 'react';
import { View, StyleSheet, Text, Pressable, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';
import commonStyles from '../../../common/styles';
import IMAGES from '../../../assets/images';
import { EXECUTIVE } from '../../../utils/strings/screen-name';
import COLORS from '../../../utils/color';
import { toast } from '../../../utils/toast';
import STRINGS from '../../../utils/strings';

export default function ExecutiveDashboard({ navigation }) {

  const list = [
    {
      title: 'Inventory',
      image: IMAGES.inventoryExec,
      containerProps: {
        onPress: () => { navigation.navigate(EXECUTIVE.CREATE_ACCOUNT) },
      }
    },
    {
      title: 'Digi Menu',
      image: IMAGES.comingSoon,
      containerProps: {
        onPress: () => { toast(STRINGS.comingSoon); },

      }
    },
    {
      title: 'Marketing',
      image: IMAGES.comingSoon,
      containerProps: {
        onPress: () => { toast(STRINGS.comingSoon) },
      }
    },
  ]

  const iconNavigation = [
    {
      title: 'Inquiry',
      image: IMAGES.inquiry,
      disabled: false,
      iconProps: {
        onPress: () => { navigation.navigate(EXECUTIVE.ENQUIRY_FORM) }
      }
    },
    {
      title: 'Day Target',
      image: IMAGES.inquiry,
      disabled: true,
      iconProps: {
        onPress: () => { toast(STRINGS.launchingSoon); }
      }
    },
    {
      title: 'Achievement',
      image: IMAGES.achievement,
      disabled: true,
      iconProps: {
        onPress: () => { toast(STRINGS.launchingSoon); }
      }
    },
    {
      title: 'Demo',
      image: IMAGES.demo,
      disabled: true,
      iconProps: {
        onPress: () => { toast(STRINGS.launchingSoon); }
      }
    },
    {
      title: 'Salary',
      image: IMAGES.salary,
      disabled: true,
      iconProps: {
        onPress: () => { toast(STRINGS.launchingSoon); }
      }
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
      {/* Rounded Icons */}
      <View >
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal={true}
          className="p-2 py-2"
        >
          {
            iconNavigation.map(({ title, image, disabled, iconProps }) => (
              <View className='m-2 mr-1 flex items-center'>
                <TouchableOpacity
                  style={[styles.roundButton, commonStyles.shadow]}
                  className={`bg-primary border-2 border-white shadow-lg mb-1 ${disabled ? 'bg-grey' : 'bg-primary'}`}
                  {...iconProps}
                >
                  <Image source={image} style={styles.image} />
                </TouchableOpacity>
                <Text className="text-11 text-black">{title}</Text>
              </View>
            ))
          }
        </ScrollView>
      </View>

      {/* Navigation List */}
      <ScrollView className='flex-1'>
        {
          list.map(({ title, image, containerProps }) => (
            <TouchableOpacity
              activeOpacity={0.9}
              className="p-4 mx-4 my-3 bg-white rounded-lg shadow-lg flex flex-row justify-between items-center"
              style={commonStyles.shadow}
              {...containerProps}
            >
              <Text className="text-black text-lg font-medium">{title}</Text>
              <Image source={image} style={styles.image} />
            </TouchableOpacity>

          ))
        }
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.white,
  },
  buttonContainer: {},
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
