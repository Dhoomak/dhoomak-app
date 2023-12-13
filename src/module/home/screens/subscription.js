import { View, Text, ScrollView, Image,FlatList, Pressable } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import React,{useState} from 'react'
import STRINGS from '../../../utils/strings'
import { InputDate, InputTime } from '../../../common/form/input-fields'
import { PrimaryButton } from '../../../common/button';
import { USER } from '../../../utils/strings/screen-name';

const Subscription = ({navigation}) => {
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
    // label: 'Select a Date', // Specify the label

  };

  const handleFormData=()=>{
    console.log(date)
  }

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row' }}>
        <Image source={require("./../../../assets/images/basket.png")} style={{ width: 50, height: 50 }} />
        <View style={{ marginLeft: 5, flexDirection: 'column' }}>
          <Text style={{ fontWeight: 'bold', color: 'black' }}>
            {item.itemName}
          </Text>
          <Text>
            {item.description}
          </Text>
        </View>
      </View>
      <Text>
        {item.quantity}
      </Text>
    </View>
  );

const [termsChecked, setTermsChecked] = useState(true);
  const [sampleChecked, setSampleChecked] = useState(true);

    const submitForm=()=>{
        console.log("hello")
    }

    function handleNavigation() {
        navigation.navigate(USER.PAYMENT)
    }

  return (
    <ScrollView >
      <Text className="text-red flex justify-center align-middle text-center font-bold text-xl mt-5">{STRINGS.inventoryCompleted}</Text>
      <View className="px-5 mx-5 mt-5 rounded-md bg-white rounded-xl shadow-lg ">
        <Text className="text-xl text-black font-bold mt-5">
          Total Items
        </Text>
        <View className="flex flex-row justify-between">
        <Text className="text-sm text-black ">
          15/15 ITEMS SELECTED(475 KG)
        </Text>
        <View className="flex flex-row">
            <Image className="mx-2"source={require("./../../../assets/images/share.png")}/>
            <Image source={require("./../../../assets/images/delete.png")}/>
        </View>
        </View>
        <View style={{height:200}}>
        <FlatList
            nestedScrollEnabled
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            style={{ marginVertical: 10 }}
            ItemSeparatorComponent={() => <View style={{ borderBottomWidth: 1, borderColor: 'gray', marginVertical: 5 }} />}
        />
        </View>
      </View>
      <View className="px-5 mx-5 my-5 rounded-md bg-white rounded-xl shadow-lg ">
        <Text className="text-xl text-black font-bold mt-5">
          Choose Your Plan
        </Text>

        <View style={{}} className="flex flex-row">
            <View className="flex flex-row gap-3 my-2">
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
        <View className="flex flex-row gap-10 mb-5">
        <View>
            <Text className="text-black font-medium text-sm">Free Delivery</Text>
            <Text className="text-black font-medium text-sm">Free Delivery</Text>
        </View>
        <View>
            <Text className="text-black font-medium text-sm">Free Delivery</Text>
            <Text className="text-black font-medium text-sm">Free Delivery</Text>
        </View>
        </View>

      </View>
         <View className="px-5 mx-5 mt-5 rounded-md bg-white rounded-xl shadow-lg ">
        <Text className="text-xl text-black font-bold mt-5">
          Start Date
        </Text>
        <View style={{height:200}}>
        <InputDate
        attributes={inputDateAttributes}
        handleFormData={handleFormData}
      />
      <InputTime         
        attributes={inputDateAttributes}
        handleFormData={handleFormData}/>
        </View>
      </View>
    <View className="mx-5">
        <View className="flex flex-row items-center mt-4">
          <CheckBox
            value={termsChecked}
            onValueChange={(isChecked) => setTermsChecked(isChecked)}
          />
          <Text className="ml-2 text-sm">I agree to the Terms and Conditions</Text>
        </View>
        <View className="flex flex-row items-center mt-2">
          <CheckBox
            value={sampleChecked}
            onValueChange={(isChecked) => setSampleChecked(isChecked)}
          />
          <Text className="ml-2 text-sm">Request for Sample</Text>
        </View>
      </View>
        <View className="mx-4 my-5">
        <PrimaryButton title="Submit" onClick={handleNavigation}/>
        </View>
    </ScrollView>
  )
}

export default Subscription


