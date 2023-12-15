import React, { useState } from 'react';
import { ImageBackground, View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import SelectDropdown from 'react-native-select-dropdown'

import { addToCart } from '../../../store/reducers/cart-slice';

import IMAGES from '../../../assets/images';
import STRINGS from '../../../utils/strings';
import COLORS from '../../../utils/color';
import { toast } from '../../../utils/toast';
import { generateRandomId } from '../../../utils/generate-random-id';
const quantityType = ["kg", "gm", "l", "ml"];

export default function AddCustomItemForm() {
    const dispatch = useDispatch();

    const [itemName, onChangeItemName] = useState('');
    const [category, onChangeCategory] = useState('');
    const [quanity, onChangeQuanity] = useState('');
    const [quanityTypeVal, onChangeQuanityTypeVal] = useState('');

    function handleAddItem() {
        if (itemName == '') {
            toast('Please Enter Item Name');
        } else if (quanity == '') {
            toast('Please Enter Valid Quantity');
        } else if (category == '') {
            toast('Please Enter Category');
        } else {
            toast(`You Added: ${itemName} | ${quanity}${quanityTypeVal}`);
            handleAddToCart();
        }
    }

    function handleAddToCart() {
        const item = {
            id: generateRandomId().toString(),
            name: itemName,
            brand: itemName,
            quantity: quanity,
            category: category,
            quantityType: quanityTypeVal,
        }
        dispatch(addToCart(item));
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
            <View className='mb-4 w-full'>
                <TextInput
                    onChangeText={onChangeCategory}
                    value={category}
                    placeholder={STRINGS.category}
                    className='shadow-md rounded-md p-1 px-2 w-full bg-white'
                    style={styles.shadow}
                />
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
                        data={quantityType}
                        onSelect={(selectedItem) => { onChangeQuanityTypeVal(selectedItem); }}
                        defaultValue={quantityType[0]}
                        buttonTextAfterSelection={(selectedItem) => selectedItem}
                        rowTextForSelection={(item) => item}
                        buttonStyle={styles.dropdown}
                        buttonTextStyle={styles.dropdownText}
                        dropdownIconPosition='right'
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