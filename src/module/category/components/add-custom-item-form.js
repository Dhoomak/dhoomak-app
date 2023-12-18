import React, { useState, useRef } from 'react';
import { ImageBackground, View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SelectDropdown from 'react-native-select-dropdown'

// reducers
import { addToInventory } from '../../inventory/reducers/inventory-reducer';
import { getCategoryState } from '../reducers/category-reducer';

// utils
import IMAGES from '../../../assets/images';
import STRINGS from '../../../utils/strings';
import COLORS from '../../../utils/color';
import { toast } from '../../../utils/toast';

// data
import { unitQuantityType } from '../../../data/data';
import { generateRandomId } from '../../../utils/generate-random-id';
import { PRODUCTS_DEFAULT_IMAGE } from '../../../data/constant';

const unitQuantityDefaultValue = unitQuantityType[0];

export default function AddCustomItemForm() {
    const categoryFieldRef = useRef({});
    const { categories } = useSelector(getCategoryState);
    const dispatch = useDispatch();

    const [itemName, onChangeItemName] = useState('');
    const [category, onChangeCategory] = useState('');
    const [quanity, onChangeQuanity] = useState('');
    const [quanityTypeVal, onChangeQuanityTypeVal] = useState(unitQuantityDefaultValue);

    function handleAddItem() {
        if (itemName == '') {
            toast('Please Enter Item Name');
        } else if (quanity == '') {
            toast('Please Enter Valid Quantity');
        } else if (category == '') {
            toast('Please Enter Category');
        } else {
            toast(`You Added: ${itemName} of ${category} | Quanity: ${quanity}${quanityTypeVal}`);
            handleAddToCart();
        }
    }

    function handleAddToCart() {
        const item = {
            _id: generateRandomId().toString(),
            name: itemName,
            brandName: itemName,
            unitQuantity: quanity,
            unitType: quanityTypeVal,
            categoryId: category,
            unitAdded: 1,
            unitPrice: 0,
            images: [PRODUCTS_DEFAULT_IMAGE],
        }
        // console.log(item);

        dispatch(addToInventory(item));
        onChangeItemName('')
        categoryFieldRef.current.reset();
        onChangeQuanity('')
        onChangeQuanityTypeVal(unitQuantityDefaultValue);
    }

    return (
        <ImageBackground source={IMAGES.kitchenBg} className='py-14 px-10 ' >
            <Image source={IMAGES.expertPicBanner} className='absolute top-2 left-0 h-7 w-2/4' style={{ resizeMode: 'contain' }} />
            {/* Items Name Input */}
            <View className='mb-4 w-full'>
                <TextInput
                    onChangeText={onChangeItemName}
                    value={itemName}
                    placeholder={STRINGS.itemName}
                    className='shadow-md rounded-md p-1 px-2 w-full bg-white'
                    style={styles.shadow}
                />
            </View>
            {/* Category */}
            <View className='mb-4 w-full '>
                <View
                    className='flex flex-row shadow-md rounded-md bg-white'
                    style={styles.shadow}
                >
                    <SelectDropdown

                        ref={categoryFieldRef}
                        data={categories}
                        onSelect={(selectedItem) => { onChangeCategory(selectedItem._id) }}
                        defaultButtonText='Select Category'
                        defaultValue={categories[0]?.name}
                        buttonTextAfterSelection={(selectedItem) => selectedItem.name}
                        rowTextForSelection={(item) => item.name}
                        buttonStyle={styles.dropdown}
                        buttonTextStyle={styles.dropdownText}
                        dropdownIconPosition='right'
                        renderDropdownIcon={() => (<Image source={IMAGES.dropdownIcon} className='w-5 h-4' />)}
                        selectedRowTextStyle={{ color: COLORS.black }}
                        selectedRowStyle={{ backgroundColor: COLORS.lightGrey }}
                    // dropdownStyle={{ height: 36 }}

                    />
                </View>
            </View>
            {/* Quantity Input */}
            <View className='mb-4 flex flex-row gap-4'>
                <TextInput
                    value={quanity}
                    onChangeText={onChangeQuanity}
                    keyboardType='numeric'
                    placeholder={STRINGS.quanity}
                    className='shadow-md rounded-md p-1 px-2 flex-2 bg-white'
                    style={styles.shadow}
                />
                <View
                    className='flex flex-1 shadow-md rounded-md bg-white overflow-hidden'
                    style={styles.shadow}
                >
                    <SelectDropdown
                        data={unitQuantityType}
                        onSelect={(selectedItem) => { onChangeQuanityTypeVal(selectedItem) }}
                        defaultValue={unitQuantityDefaultValue}
                        buttonTextAfterSelection={(selectedItem) => selectedItem}
                        rowTextForSelection={(item) => item}
                        buttonStyle={styles.dropdown}
                        buttonTextStyle={styles.dropdownText}
                        dropdownIconPosition='right'
                        selectedRowTextStyle={{ color: COLORS.black }}
                        selectedRowStyle={{ backgroundColor: COLORS.lightGrey }}
                        renderDropdownIcon={() => (<Image source={IMAGES.dropdownIcon} className='w-5 h-4' />)}
                    />
                </View>
            </View>
            {/* Submit Button */}
            <View className='w-full'>
                <TouchableOpacity
                    onPress={handleAddItem}
                    activeOpacity={0.9}
                    className='shadow-md rounded-md p-2 w-full bg-primary'
                    style={styles.shadow}>
                    <Text className='text-base font-bold text-center text-black'>{STRINGS.addItems}</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
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
        height: 36,
        // flex: 1,
        backgroundColor: COLORS.white,
        width: '100%',
        // padding: 4,
        // paddingHorizontal: 5,
    },
    dropdownText: {
        marginHorizontal: 0,
        fontSize: 14,
        textAlign: 'left',

    },
    contentContainerStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 16,
    }
})