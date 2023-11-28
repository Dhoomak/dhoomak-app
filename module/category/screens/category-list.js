import React, { useCallback, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { categories, products } from '../../../data/data';
import CategoryListCard from '../components/category-list-card';
import COLORS from '../../../utils/color';
import ProductCard from '../components/product-card';

export default function CategoryList() {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0].id);


  const onCategoryPress = useCallback((id) => {
    setActiveCategoryId(id);
  }, [activeCategoryId])

  return (
    <SafeAreaView className='flex-1 bg-grey'>
      <View className='flex-row flex-1'>
        <View className='w-24 bg-white h-full border-r border-r-grey'>
          <ScrollView
            showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 4 }}
          >
            {
              categories.map((item, ind) => <CategoryListCard key={item.id} item={item} isActive={activeCategoryId == item.id} onCategoryPress={onCategoryPress} />)
            }
          </ScrollView>
        </View>
        <View className='flex-1 bg-white h-full'>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            {
              products.map((item, ind) => (
                <View key={ind} style={{
                  width: '50%', flexDirection: "row", borderWidth: 1,
                  borderColor: COLORS.grey
                }}>
                  <ProductCard key={item.id} item={item} />
                </View>
              ))
            }
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
