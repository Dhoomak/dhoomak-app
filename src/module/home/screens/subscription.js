import { View, Text, ScrollView, Image, FlatList, Pressable, TouchableOpacity } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react'
import STRINGS from '../../../utils/strings'
import { InputDate, InputTime } from '../../../common/form/input-fields'
import FilledButton from '../../../common/button';
import { USER } from '../../../utils/strings/screen-name';
import commonStyles from './../../../common/styles';
import IMAGES from '../../../assets/images';
import COLORS from '../../../utils/color';

const Subscription = ({ navigation }) => {
  const [termsChecked, setTermsChecked] = useState(true);
  const [sampleChecked, setSampleChecked] = useState(true);

  const data = [
    {
      itemName: "Notebooks",
      description: "Set of 3 ",
      quantity: 5
    },
    {
      itemName: "Pens",
      description: "Blue bal",
      quantity: 10
    },
    {
      itemName: "Coffee Mugs",
      description: "Ceramic mugs",
      quantity: 6
    },
    {
      itemName: "Desk Chair",
      description: "Comfortable ",
      quantity: 1
    },
    {
      itemName: "USB Flash Drives",
      description: "32GB USB 3.0 ",
      quantity: 3
    },
  ]

  const inputDateAttributes = {
    name: 'dateInput',
  };

  const handleFormData = () => {
    console.log(date)
  }

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 4 }}>
      <Image source={IMAGES.banner.banner1} style={{ width: 50, height: 50, borderRadius: 8, }} />
      <View style={{ marginLeft: 5, flexDirection: 'column', flex: 1, }}>
        <Text style={{ fontWeight: 'bold', color: COLORS.black }}>{item.itemName}</Text>
        <Text style={{ fontSize: 12 }}>{item.description}</Text>
      </View>
      <Text style={{ fontSize: 14, color: COLORS.black }}>
        {item.quantity}
      </Text>
    </View>
  );

  const submitForm = () => {
    console.log("Form Submitted....");
    handleNavigation();
  }

  function handleNavigation() {
    navigation.navigate(USER.PAYMENT)
  }

  const handleShare = () => {
    console.log('Share Item')
  }

  const handleDelete = () => {
    console.log('Delete Items')
  }


  return (
    <ScrollView className="bg-white">
      <Text className="text-red flex justify-center align-middle text-center font-bold text-lg my-3">{STRINGS.inventoryCompleted}</Text>
      {/* Total Item Details Container */}
      <View className="px-5 py-4 mx-4 mb-6 bg-white rounded-xl shadow-lg " style={commonStyles.shadow}>
        <View className="flex flex-row items-center mb-4">
          <View className="flex-1 flex flex-col justify-between ">
            <Text className="text-lg text-black font-bold">Total Items</Text>
            <Text className="text-xs text-black ">15/15 ITEMS SELECTED(475 KG)</Text>
          </View>
          <View className="flex flex-row items-center gap-2">
            <TouchableOpacity onPress={handleShare}>
              <Image source={IMAGES.shareIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDelete}>
              <Image source={IMAGES.deleteIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 200 }}>
          <FlatList
            nestedScrollEnabled
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => <View style={{ borderBottomWidth: 1, marginVertical: 5 }} className="border-grey" />}
          />
        </View>
      </View>

      {/* Choose Plan */}
      <View className="px-5 py-4 mx-4 mb-6 bg-white rounded-xl shadow-lg" style={commonStyles.shadow}>
        <Text className="text-lg text-black font-bold ">Choose Your Plan</Text>

        <View className="flex flex-row">
          <View className="flex flex-row gap-3 my-1">
            <Pressable className="flex item-center text-center">
              <Text className="bg-primary py-1 px-3 text-xs text-black font-semibold rounded">Monthly </Text>
            </Pressable>
            <Pressable className="flex item-center text-center">
              <Text className="bg-primary py-1 px-3 text-xs text-black font-semibold rounded">Fortnight </Text>
            </Pressable>
            <Pressable className="flex item-center text-center">
              <Text className="bg-primary py-1 px-3 text-xs text-black font-semibold rounded">Weekly </Text>
            </Pressable>
          </View>
        </View>
        <Text className="text-xl text-black font-bold my-2">
          ₹999
        </Text>
        <View className="flex flex-row gap-2 ">
          <View>
            <Text className="text-black font-normal text-xs">Free Delivery</Text>
            <Text className="text-black font-normal text-xs">Free Delivery</Text>
            <Text className="text-black font-normal text-xs">Free Delivery</Text>
            <Text className="text-black font-normal text-xs">Free Delivery</Text>
          </View>
          {/* <View>
          </View> */}
        </View>

      </View>

      {/* Start Date */}
      <View className="px-5 py-4 mx-4 mb-6 bg-white rounded-xl shadow-lg " style={commonStyles.shadow}>
        <Text className="text-lg text-black font-bold">Start Date</Text>
        <View >
          <InputDate
            attributes={inputDateAttributes}
            handleFormData={handleFormData}
          />
          <InputTime
            attributes={inputDateAttributes}
            handleFormData={handleFormData} />
        </View>
      </View>
      {/* Accept Agreement */}
      <View className="mx-4 mb-2">
        <View className="flex flex-row items-center ">
          <CheckBox
            tintColors={{
              true: COLORS.secondary,
              false: COLORS.lightGrey,
            }}
            value={termsChecked}
            onValueChange={(isChecked) => setTermsChecked(isChecked)}
          />
          <Text className="ml-2 text-sm">I agree to the Terms and Conditions</Text>
        </View>
        <View className="flex flex-row items-center ">
          <CheckBox
            tintColors={{
              true: COLORS.secondary,
              false: COLORS.lightGrey,
            }}
            value={sampleChecked}
            onValueChange={(isChecked) => setSampleChecked(isChecked)}
          />
          <Text className="ml-2 text-sm">Request for Sample</Text>
        </View>
      </View>

      {/* Button */}
      <View className="mx-4 mb-4">
        <FilledButton
          text="Submit"
          onPress={submitForm}
          textProps={{ className: 'text-black' }}
          btnProps={{ className: 'bg-primary' }}
        />
      </View>
    </ScrollView>
  )
}

export default Subscription


