import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native';
import commonStyles from '../../../common/styles';
import IMAGES from '../../../assets/images';
import { EXECUTIVE } from '../../../utils/strings/screen-name';
import COLORS from '../../../utils/color';
import { toast } from '../../../utils/toast';
import STRINGS from '../../../utils/strings';
import CircleNavigationIcon from '../components/circle-navigation-icon';
import ListNavigationBar from '../components/list-navigation-bar';

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
      <View className="px-2 py-2">
        <FlatList
          data={iconNavigation}
          keyExtractor={(item) => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className='w-2'></View>}
          renderItem={({ item }) => (<CircleNavigationIcon {...item} />)}
        />
      </View>

      {/* Navigation List */}
      <FlatList
        className='flex-1'
        data={list}
        keyExtractor={(item) => item.title}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className='w-2'></View>}
        renderItem={({ item }) => (<ListNavigationBar {...item} />)}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.magnolia,
  }
});
