import React, { useCallback, useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoryListCard from '../components/category-list-card';
import COLORS from '../../../utils/color';
import ProductCard from '../components/product-card';
import ProductCartTab from '../components/product-cart-tab';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryState } from '../reducers/category-reducer';
import { getProductsListAction } from '../thunks/category-thunk';
import DhoomakScrollView from '../../../common/components/dhoomak-scrollview';

export default function CategoryList({ route }) {
  const dispatch = useDispatch();
  const { categories, products } = useSelector(getCategoryState);

  const {
    selectedCategoryId = categories?.[0]?._id,
  } = route.params;

  const [activeCategoryId, setActiveCategoryId] = useState(selectedCategoryId);

  const onCategoryPress = useCallback((id) => {
    setActiveCategoryId(id);
  }, [activeCategoryId])

  useEffect(() => {
    dispatch(getProductsListAction({ categoryId: activeCategoryId }));
  }, [activeCategoryId])


  return (
    <SafeAreaView className='flex-1 bg-grey'>
      <View className='flex-row flex-1'>
        {/* Category List */}
        <View className='w-24 bg-white h-full border-r border-r-grey'>
          <DhoomakScrollView
            contentContainerStyle={{ gap: 4 }}
          >
            {
              categories.map((item) => <CategoryListCard key={item._id} item={item} isActive={activeCategoryId == item._id} onCategoryPress={onCategoryPress} />)
            }
          </DhoomakScrollView>
        </View>

        {/* Product List */}
        <View className='flex-1 bg-white h-full'>
          <DhoomakScrollView
            contentContainerStyle={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            {
              products.filter((item) => item.categoryId == activeCategoryId).map((item, ind) => (
                <View key={ind} style={{
                  width: '50%', flexDirection: "row", borderWidth: 1,
                  borderColor: COLORS.grey
                }}>
                  <ProductCard key={item._id} item={item} />
                </View>
              ))
            }
          </DhoomakScrollView>
        </View>
      </View>
      {/* Product Cart Tab */}
      <ProductCartTab />
    </SafeAreaView>
  );
}

