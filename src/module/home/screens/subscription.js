import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react'
import STRINGS from '../../../utils/strings'
import { InputDate, InputTime, InputDropdown } from '../../../common/form/input-fields'
import FilledButton from '../../../common/button';
import { USER } from '../../../utils/strings/screen-name';
import commonStyles from './../../../common/styles';
import COLORS from '../../../utils/color';
import DhoomakFlatlist from '../../../common/components/dhoomak-flatlist';
import Icon from 'react-native-vector-icons/Ionicons'
import { DELIVERY_TIME_SLOTS, SUBSCRIPTION_AMOUNT, SUBSCRIPTION_TYPE } from '../../../data/constant';
import ProductDetailListCard from '../components/product-detail-list-card';
import { subscriptionBenefitList } from '../../../data/data';
import { toast } from '../../../utils/toast';


const Subscription = ({ navigation, route }) => {
  const { inventoryItems } = route.params;

  const [termsChecked, setTermsChecked] = useState(true);
  const [sampleChecked, setSampleChecked] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [frequency, setFrequency] = useState(SUBSCRIPTION_TYPE.WEEKLY);

  const [showFullList, setShowFullList] = useState(true);

  const inventoryListLength = inventoryItems.length;

  const inputDateAttributes = {
    name: 'Date',
    label: '',
  };

  const handleDate = (date) => {
    console.log(date);
    setStartDate(date);
  }

  const handleTimeSlot = (value) => {
    console.log(value);
    setTimeSlot(value);
  }

  const submitForm = () => {
    // console.log(inventoryItems);
    if (!termsChecked) {
      toast('Accept Terms & Conditions');
      return;
    } else if (startDate == '') {
      toast('Select Date');
      return;
    } else if (timeSlot == '') {
      toast('Select Time Slot');
      return;
    }

    navigation.navigate(USER.PAYMENT);

  }

  const toggleFullList = () => {
    setShowFullList((prev) => !prev);
  }

  const handleEdit = () => {
    console.log('Delete Items');
    navigation.navigate(USER.INVENTORY_LIST);
  }

  return (
    <ScrollView className="bg-white">
      <Text className="text-secondary flex justify-center align-middle text-center font-bold text-lg m-3">{STRINGS.inventoryCompleted}</Text>
      {/* Total Item Details Container */}
      <View className="px-4 py-4 mx-3 mb-4 bg-white rounded-xl shadow-sm " style={commonStyles.shadow}>
        <View className="flex flex-row items-center mb-2">
          <View className="flex-1 flex flex-col justify-between ">
            <Text className="text-lg text-black font-bold">Total Items</Text>
            <Text className="text-sm text-black ">{inventoryItems.length} Items Selected</Text>
          </View>
          <View className="flex flex-row items-center gap-2">
            <TouchableOpacity onPress={handleEdit}>
              <Icon name="create-outline" size={24} color={COLORS.black} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: showFullList ? 200 : 'auto' }}>
          <DhoomakFlatlist
            nestedScrollEnabled
            data={inventoryItems}
            renderItem={({ item }) => <ProductDetailListCard {...item} />}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => <View style={{ borderBottomWidth: 1, marginVertical: 5 }} className="border-grey" />}
          />
        </View>
        {inventoryListLength > 3 ? (<TouchableOpacity className='p-2 pb-0 justify-between items-center flex-row' onPress={toggleFullList}>
          <Text className='text-black font-semibold text-base'>{showFullList ? 'View More' : 'View Less'}</Text>
          <Icon name={showFullList ? "chevron-down-circle-outline" : "chevron-up-circle-outline"} size={24} color={COLORS.secondary} />
        </TouchableOpacity>) : (<></>)}
      </View>

      {/* Choose Plan */}
      <View className="px-4 py-4 mx-3 mb-4 bg-white rounded-xl shadow-sm" style={commonStyles.shadow}>
        <Text className="text-lg text-black font-bold mb-2">Choose Your Plan</Text>

        <View className="flex flex-row">
          {/* <View className="flex flex-row gap-3 w-full"> */}
          {
            Object.values(SUBSCRIPTION_TYPE).map((key) => {
              return (<>
                <TouchableOpacity key={key} className="flex item-center text-center mr-2" onPress={() => setFrequency(() => key)}>
                  <Text className={`${frequency == key ? 'bg-primary' : 'bg-grey'} py-1 px-3 text-xs text-black font-semibold rounded capitalize`}>{key}</Text>
                </TouchableOpacity>
              </>)
            })
          }
        </View>

        <Text className="text-2xl font-bold my-2 text-red">{STRINGS.rupeeSign}{SUBSCRIPTION_AMOUNT}</Text>

        <View className="flex flex-row gap-1 flex-wrap">
          {
            subscriptionBenefitList.map((item) => (
              <View className="w-[45%]">
                <Text className="text-black font-normal text-xs">{item.title}</Text>
              </View>
            ))
          }
        </View>

      </View>

      {/* Start Date */}
      <View className="px-4 py-4 mx-3 mb-4 bg-white rounded-xl shadow-sm" style={commonStyles.shadow}>
        <Text className="text-lg text-black font-bold">Start Date</Text>
        {/* <View > */}
        <InputDate
          attributes={inputDateAttributes}
          handleFormData={handleDate}
        />
        <View className='mb-4'></View>
        <InputDropdown
          attributes={{
            label: 'Time Slot',
            showLabel: false,
            name: '',
            data: DELIVERY_TIME_SLOTS,
            setValueKey: 'value',
            extraProps: {
              buttonTextAfterSelection: (selectedItem) => selectedItem.value,
              rowTextForSelection: (item) => item.title
            }
          }}
          handleFormData={handleTimeSlot}
        />
        {/* </View> */}
      </View>
      {/* Accept Agreement */}
      <View className="mx-3 mb-2">
        <View className="flex flex-row items-center ">
          <CheckBox
            tintColors={{
              true: COLORS.secondary,
              false: COLORS.lightGrey,
            }}
            value={termsChecked}
            onValueChange={(isChecked) => setTermsChecked(isChecked)}
          />
          <Text className="ml-2 text-sm text-black">I agree to the Terms and Conditions</Text>
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
          <Text className="ml-2 text-sm text-black">Request for Sample</Text>
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


