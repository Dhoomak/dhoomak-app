import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { useDispatch } from 'react-redux';

// Components - Common
import SubscriptionProductListCard from '../components/subscription-product-list-card';
import { InputDate, InputDropdown } from '../../../common/form/input-fields'
import FilledButton from '../../../common/button';
import commonStyles from './../../../common/styles';

// Utils
import COLORS from '../../../utils/color';
import STRINGS from '../../../utils/strings'
// import { USER } from '../../../utils/strings/screen-name';
import { toast } from '../../../utils/toast';
import { getAsyncStorageObjectItem, getAsyncStorageItem } from '../../../utils/async-storage';

// Data
import { ASYNC_STORAGE_KEY, DELIVERY_TIME_SLOTS, ROLE, SUBSCRIPTION_AMOUNT, SUBSCRIPTION_TYPE } from '../../../data/constant';
import { subscriptionBenefitList } from '../../../data/data';
import { saveSubscriptionDetailsAction } from '../thunks/subscription-thunk';
import useAppNavigation from '../../../common/hooks/use-app-navigation';


// import DhoomakFlatlist from '../../../common/components/dhoomak-flatlist';
// import Icon from 'react-native-vector-icons/Ionicons'
// import ProductDetailListCard from '../components/product-detail-list-card';

const Subscription = ({ route }) => {
  const { inventoryItems } = route.params;
  const dispatch = useDispatch();
  const [navigation, SCREEN] = useAppNavigation();

  const [termsChecked, setTermsChecked] = useState(true);
  const [sampleChecked, setSampleChecked] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [frequency, setFrequency] = useState(SUBSCRIPTION_TYPE.WEEKLY);

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

  async function submitForm() {
    const userdata = await getAsyncStorageObjectItem(
      ASYNC_STORAGE_KEY.USER_DATA,
    );

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

    let payload;

    if (userdata.userType === ROLE.EXECUTIVE) {
      const restaurantUserId = await getAsyncStorageItem(
        ASYNC_STORAGE_KEY.USER_RESTAURANT_ID,
      );
      payload = {
        deliverySlot: timeSlot,
        frequency: frequency,
        startDate: startDate,
        requestForSample: sampleChecked,
        user: restaurantUserId,
      };

    } else {
      payload = {
        deliverySlot: timeSlot,
        frequency: frequency,
        startDate: startDate,
        requestForSample: sampleChecked,
        user: userdata._id,
      };
    }
    console.log(payload);

    dispatch(saveSubscriptionDetailsAction({
      subscriptionData: payload,
      navigation,
      SCREEN,
      inventoryItems,
      userType: userdata.userType,
    }))
  }

  return (
    <ScrollView className="bg-white">
      <Text className="text-secondary flex justify-center align-middle text-center font-bold text-lg m-3">{STRINGS.inventoryCompleted}</Text>
      {/* Total Item Details Container */}

      <View className='mx-3 mb-4'>
        <SubscriptionProductListCard inventoryItems={inventoryItems} />
      </View>

      {/* Choose Plan */}
      <View className="px-4 py-4 mx-3 mb-4 bg-white rounded-xl shadow-sm" style={commonStyles.shadow}>
        <Text className="text-lg text-black font-bold mb-2">Choose Your Plan</Text>

        <View className="flex flex-row">
          {/* <View className="flex flex-row gap-3 w-full"> */}
          {
            Object.values(SUBSCRIPTION_TYPE).map((key) => {
              return (
                <TouchableOpacity
                  key={key}
                  className="flex item-center text-center mr-2"
                  onPress={() => setFrequency(() => key)}
                >
                  <Text className={`${frequency == key ? 'bg-primary' : 'bg-grey'} py-1 px-3 text-xs text-black font-semibold rounded capitalize`}>{key}</Text>
                </TouchableOpacity>
              )
            })
          }
        </View>

        <Text className="text-2xl font-bold my-2 text-red">{STRINGS.rupeeSign}{SUBSCRIPTION_AMOUNT}</Text>

        <View className="flex flex-row gap-1 flex-wrap">
          {
            subscriptionBenefitList.map((item) => (
              <View className="w-[45%]" key={item.title}>
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


