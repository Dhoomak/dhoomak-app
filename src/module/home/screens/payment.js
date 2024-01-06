import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import IMAGES from '../../../assets/images'

const Payment = () => {
    return (
        <View className="bg-white flex-1">
            <View className="px-2 mx-5 mt-5 bg-white flex-1">
                {/* <Image source={IMAGES.backButton} /> */}
                <Text className="text-xl text-black font-bold mt-5">
                    Payment Gateway
                </Text>
                <View style={{}} className="flex flex-row">
                    <View className="flex flex-row gap-3 my-2">
                        <Pressable className="flex item-center text-center">
                            <Text className="bg-white border  border-green py-1 px-3 text-xs text-green font-semibold rounded">Pay Now </Text>
                        </Pressable>
                        <Pressable className="flex item-center text-center">
                            <Text className="bg-white border  border-green py-1 px-3 text-xs text-green font-semibold rounded">Pay Later </Text>
                        </Pressable>
                    </View>
                </View>
                <Text className=" py-1  text-xs text-black font-semibold rounded">For safe payment, pay using net banking  </Text>
                <View className="mt-10 bg-dark-pink rounded-xl shadow-lg ">
                    <View className="px-5 mt-5 mb-10">
                        <View>
                            <View className="flex flex-row justify-between my-1 mx-5">
                                <Text className="text-black font-lg font-medium">Subscription Amount</Text>
                                <Text className="text-black font-lg font-medium">999.00/</Text>
                            </View>
                            <View className="flex flex-row justify-between my-1 mx-5">
                                <Text className="text-black font-lg font-medium">GST</Text>
                                <Text className="text-black font-lg font-medium">999.00/</Text>
                            </View>
                            <View className="flex flex-row justify-between my-1 mx-5">
                                <Text className="text-black font-lg font-medium">CGST </Text>
                                <Text className="text-black font-lg font-medium">999.00/</Text>
                            </View>
                        </View>
                        <View style={{ height: 2, backgroundColor: "#979595" }} className="mx-5 my-4" />
                        <View className="flex flex-row justify-between my-1 mx-5">
                            <Text className="text-black font-lg font-medium">Total Amount</Text>
                            <Text className="text-black font-lg font-medium">999.00/</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View className="mt-10 bg-dark-pink rounded-xl shadow-lg ">
                    <View className="px-5 my-5">
                        {/* <View style={{ height: 2, backgroundColor: "#979595" }} className="mx-5 my-4" /> */}
                        <View className="flex flex-row justify-between align-middle text-center my-1 mx-5">
                            <Text className="text-black font-lg font-sm">We have served  1 lac+ happy customers across India</Text>
                        </View>
                    </View>
                </View>
        </View>
    )
}

export default Payment