import React, { memo, useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import commonStyles from '../../../common/styles';
import DhoomakScrollView from '../../../common/components/dhoomak-scrollview';
import STRINGS from '../../../utils/strings/index';
import ProductCartTab from '../components/product-cart-tab';

function ItemDetail({ route, navigation }) {
    const [readMore, setReadMore] = useState(false);
    const { id, item } = route.params;

    const {
        name = '',
        brand = '',
        quantity = '',
        quantityType = '',
        price = '',
        img = '',
        productDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        importantInformation = "",
    } = item;

    const onChangeReadStatus = useCallback(() => setReadMore(prev => !prev), [])

    const productInfo = useCallback(() => ([
        {
            key: 'Product Name',
            value: name,
        },
        {
            key: 'Brand',
            value: brand,
        },
        {
            key: 'Quanity',
            value: `${quantity} ${quantityType}`,
        },
    ]), [name, brand, quantity, quantityType])

    function handleAddToCart(e) {
        e.preventDefault();
        // dispatch(addToCart(item));
        console.log('Hello');
    }

    return (
        <View className='flex-1'>
            <DhoomakScrollView className='flex-1 bg-grey p-3' contentContainerStyle={{ paddingBottom: 11 }}>
                {/* Item Detail */}
                <View className='bg-white flex-1 p-4 py-3 rounded-lg mb-3'>
                    <View className='w-full h-full ' >
                        {/* Images Coursel / Single Image */}
                        <View className='w-full mb-2 justify-center items-center' >
                            <View className='w-4/5 aspect-square'>
                                <Image source={{ uri: img }} className='w-full aspect-square' style={{ resizeMode: 'contain' }} />
                            </View>
                        </View>
                        {/* Details */}
                        <View className='w-full mb-4' >
                            <Text className='text-sm'>{brand}</Text>
                            <Text className='text-lg font-bold text-black'>{name}</Text>
                        </View>
                        <View className='flex flex-row '>
                            <View className='flex-1 '>
                                <Text className='text-sm text-black mb-1'>{quantity}{quantityType} quantity in Pack</Text>
                                <Text className='text-sm text-black font-semibold flex-1'>{STRINGS.rupeeSign}{price}/{quantityType}</Text>
                            </View>
                            <View className='items-end justify-center'>
                                <TouchableHighlight onPress={handleAddToCart} className='rounded-md' underlayColor='white'>
                                    <View className='bg-secondary rounded-md py-1 px-4 shadow-md' style={commonStyles.shadow} >
                                        <Text className='text-sm text-white font-semibold'>Add</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </View>
                {/* Description/ Information */}
                <View className='bg-white p-4 py-3 rounded-lg mb-4'>
                    {/* product information */}
                    <View className='w-full' >
                        <Text className='text-base font-semibold text-black mb-1'>{STRINGS.productDescription}</Text>
                        <Text className='text-sm text-black/80 mb-2' numberOfLines={readMore ? 0 : 4}>{productDescription}</Text>
                        <TouchableOpacity onPress={onChangeReadStatus}>
                            <Text>{readMore ? 'Read Less...' : 'Read More...'}</Text>
                        </TouchableOpacity>
                    </View>

                    {/* important information  (if there only then visible)*/}
                    {importantInformation ? (
                        <>
                            {/* divider */}
                            <View View className="w-full bg-grey my-4 h-[1px]"></View>
                            {/* important information */}
                            <View className='w-full' >
                                <Text className='text-base font-semibold text-black mb-1'>{STRINGS.importantInformation}</Text>
                                <Text className='text-sm text-black/80'>{importantInformation}</Text>
                            </View>
                        </>
                    ) : (<></>)}

                    {/* divider */}
                    <View className="w-full bg-grey my-4 h-[1px]"></View>

                    {/* information */}
                    <View className='w-full' >
                        <Text className='text-base font-semibold text-black mb-1'>{STRINGS.information}</Text>
                        {productInfo().map((info) => (
                            <View key={info.key} className=' flex-row'>
                                <Text className='flex-1 text-black'>{info.key}</Text>
                                <Text className='text-black mx-2'>:</Text>
                                <Text className='flex-1 font-semibold text-black'>{info.value}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </DhoomakScrollView >
            <ProductCartTab />
        </View>
    );
}

export default memo(ItemDetail)