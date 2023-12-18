import React from 'react';
import { View, StyleSheet, Text,SafeAreaView,FlatList} from 'react-native';
import IMAGES from '../../../assets/images';
import STRINGS from '../../../utils/strings';
import { toast } from '../../../utils/toast';
import ListNavigationBar from '../../executive/components/list-navigation-bar';
import COLORS from '../../../utils/color';
import { DELIVERY } from '../../../utils/strings/screen-name';

export default function DeliveryDashboard({navigation}) {

  const list = [
    {
      title: 'Deliveries',
      image: IMAGES.inventoryExec,
      containerProps: {
        onPress: () => { navigation.navigate(DELIVERY.DELIVERY_ITEMS) },
      }
    },
  ]


  return (
    <SafeAreaView style={styles.container}>
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