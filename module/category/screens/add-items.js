import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, ImageBackground, Image, TextInput, StyleSheet, TouchableOpacity, FlatList, ToastAndroid } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import IMAGES from '../../../assets/images';
import COLORS from '../../../utils/color';
import { categories } from '../../../data/data';
import CategoryCard from '../components/category-card';

const quantityType = ["kg", "g", "l", "ml"]

function AddItems() {
  const [itemName, onChangeItemName] = useState('');
  const [quanity, onChangeQuanity] = useState('');
  const [quanityTypeVal, onChangeQuanityTypeVal] = useState('');

  const onSubmit = () => {
    ToastAndroid.show(`You Entered: ${itemName} of Quantity: ${quanity} ${quanityTypeVal}`, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
    console.log(`You Entered: ${itemName} of Quantity: ${quanity} ${quanityTypeVal}`);
  }

  return (
    <KeyboardAvoidingView
      className='w-full h-full relative flex-1'
      behavior={'height'}
    >
      {/* Add Items Section */}
      <ImageBackground source={IMAGES.kitchenBg} className='py-14 px-10 ' >
        <Image source={IMAGES.expertPicBanner} className='absolute top-2 left-0 h-7 w-2/4' style={{ resizeMode: 'contain' }} />
        {/* Items Name Input */}
        <View className='mb-4 w-full'>
          <TextInput
            onChangeText={onChangeItemName}
            value={itemName}
            placeholder="Item name"
            className='shadow-md rounded-md p-1 px-2 w-full bg-white'
            style={styles.shadow}
          />
        </View>
        {/* Quantity Input */}
        <View className='mb-8 flex flex-row gap-4'>
          <TextInput
            value={quanity}
            onChangeText={onChangeQuanity}
            keyboardType='numeric'
            placeholder="Quantity"
            className='shadow-md rounded-md p-1 px-2 flex-grow bg-white'
            style={styles.shadow}
          />
          <View
            className='flex flex-1 shadow-md rounded-md bg-white overflow-hidden'
            style={styles.shadow}
          >
            <SelectDropdown
              data={quantityType}
              onSelect={(selectedItem, index) => { console.log(selectedItem, index); onChangeQuanityTypeVal(selectedItem); }}
              defaultValue={quantityType[0]}
              buttonTextAfterSelection={(selectedItem) => selectedItem}
              rowTextForSelection={(item) => item}
              buttonStyle={styles.dropdown}
              buttonTextStyle={styles.dropdownText}
            />
          </View>
        </View>
        {/* Submit Button */}
        <View className='w-full'>
          <TouchableOpacity
            onPress={onSubmit}
            activeOpacity={0.9}
            className='shadow-md rounded-md p-2 w-full bg-primary'
            style={styles.shadow}>
            <Text className='text-base font-bold text-center text-black'>Add Items</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      {/* Choose category list */}
      <View
        className='w-full h-full p-4 bg-white flex-1'
      >
        {/* Title */}
        <Text className='text-black text-base font-semibold mb-4'>Choose by Categories</Text>
        {/* List of Categories */}
        <ScrollView contentContainerStyle={styles.contentContainerStyle} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
          {
            categories.map((item, ind) => (<View key={ind} style={{ width: '30%', flexDirection: "row" }}>
              <CategoryCard item={item} />
            </View>)
            )
          }
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  shadow: {
    overflow: 'hidden',
    shadowColor: 'black',
    shadowRadius: 7,
    shadowOpacity: 1,
  },
  dropdown: {
    overflow: 'hidden',
    shadowColor: 'black',
    flex: 1,
    backgroundColor: COLORS.white,
    width: '100%',
    padding: 4,
    paddingHorizontal: 5,
  },
  dropdownText: {
    fontSize: 14,
  },
  contentContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  }

})

export default AddItems