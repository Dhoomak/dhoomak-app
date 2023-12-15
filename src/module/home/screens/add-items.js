import React from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, StyleSheet } from 'react-native';

// components
import CategoryCard from '../components/category-card';
import ProductCartTab from '../../../common/tabs/product-cart-tab';

// utils
import COLORS from '../../../utils/color';
import STRINGS from '../../../utils/strings';

// data
import { categories } from '../../../data/data';
import AddCustomItemForm from '../components/add-custom-item-form';

function AddItems() {

  return (
    <KeyboardAvoidingView
      className='w-full h-full relative flex-1'
      behavior={'height'}
    >
      {/* Add Custom Item Section */}
      <AddCustomItemForm />

      {/* Choose category list */}
      <View
        className='w-full h-full p-4 bg-white flex-1'
      >
        {/* Title */}
        <Text className='text-black text-base font-semibold mb-4'>{STRINGS.chooseByCategories}</Text>
        {/* List of Categories */}
        <ScrollView
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {
            categories.map((item, ind) => (
              <View key={ind} style={{ width: '30%', flexDirection: "row" }}>
                <CategoryCard item={item} />
              </View>)
            )
          }
        </ScrollView>
      </View>

      {/* Product Cart Tab */}
      <ProductCartTab />
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