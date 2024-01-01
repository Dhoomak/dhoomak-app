import React, { memo, useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TouchableHighlight } from 'react-native';
import commonStyles from '../../../common/styles';
import DhoomakScrollView from '../../../common/components/dhoomak-scrollview';
import STRINGS from '../../../utils/strings/index';
import ProductCartTab from '../components/product-cart-tab';
import { useDispatch, useSelector } from 'react-redux';
import { getInventoryState, addToInventory, removeFromInventory } from '../../inventory/reducers/inventory-reducer';
import { PRODUCT_UPDATION_TYPE } from '../../../data/constant';

function ItemDetail({ route }) {
    const { inventoryAddedIdList } = useSelector(getInventoryState);
    const dispatch = useDispatch();
    const [readMore, setReadMore] = useState(false);
    const {
        item,
        productUpdationType = PRODUCT_UPDATION_TYPE.SUBSCRIPTION,
        isUpdating = false,
    } = route.params;

    const {
        _id = '',
        name = '',
        brandName = '',
        unitQuantity = '',
        unitType = '',
        unitPrice = '',
        images: [img = PRODUCTS_DEFAULT_IMAGE] = [],
        description = "",
        unitAdded = 1,
    } = item;

    const isProductAdded = inventoryAddedIdList.includes(_id);

    const numberOfLinesToShow = readMore ? 0 : 2;

    const onChangeReadStatus = useCallback(() => setReadMore(prev => !prev), [])

    const productInfo = useCallback(() => ([
        {
            key: 'Product Name',
            value: name,
        },
        {
            key: 'Brand',
            value: brandName,
        },
        {
            key: 'Quanity',
            value: `${unitQuantity} ${unitType}`,
        },
    ]), [name, brandName, unitQuantity, unitType])

    const handleToggleItem = (e) => {
        if (e) { e.preventDefault() };
        (!isProductAdded) ? handleAddToCart() : handleRemoveFromCart();
    }

    const handleAddToCart = () => {
        dispatch(addToInventory(item));
    }
    const handleRemoveFromCart = () => {
        dispatch(removeFromInventory(_id));
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
                            <Text className='text-sm'>{brandName}</Text>
                            <Text className='text-lg font-bold text-black'>{name}</Text>
                        </View>
                        <View className='flex flex-row '>
                            <View className='flex-1 '>
                                <Text className='text-xs text-black mb-1'>{unitQuantity}{unitType} quantity in Pack</Text>
                                <Text className='text-base text-black font-bold flex-1'>{STRINGS.rupeeSign}{unitPrice}</Text>
                            </View>
                            <View className='items-end justify-center'>
                                <TouchableHighlight onPress={handleToggleItem} className='rounded-md' underlayColor='white'>
                                    <View className='bg-white rounded-md py-1 px-4 shadow-md' style={commonStyles.shadow} >
                                        <Text className={`text-sm text-white font-semibold ${!isProductAdded ? 'text-secondary' : 'text-red'}`}>{!isProductAdded ? STRINGS.add : STRINGS.remove}</Text>
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
                        <Text className='text-sm text-black/80 mb-2' numberOfLines={numberOfLinesToShow}>{description}</Text>
                        {description.length > 150 ?
                            (<TouchableOpacity onPress={onChangeReadStatus}>
                                <Text>{readMore ? STRINGS.readLess : STRINGS.readMore}</Text>
                            </TouchableOpacity>)
                            :
                            <></>
                        }
                    </View>

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

            {/* tab bar */}
            <ProductCartTab productUpdationType={productUpdationType} isUpdating={isUpdating} />
        </View>
    );
}

export default memo(ItemDetail)