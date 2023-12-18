import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import commonStyles from '../../../common/styles'
import COLORS from '../../../utils/color'
import { scale } from '../../../utils/scale'
import IMAGES from '../../../assets/images'

export const DeliveryItemDetails = ({ data }) => {
  return (
    <View style={{ backgroundColor: "white" }} className="px-5 py-4 mx-4 mb-6 bg-white rounded-xl shadow-lg my-5 ">
      <View>
        <Text>
          {`Order ID: ${data.contactNumber}`}
        </Text>
        <Text>
          {`Date: ${data.date}`}
        </Text>
      </View>
      <Text>
        {`Time of Delivery: ${data.time}`}
      </Text>
      <Text>
        {`Status: ${data.status}`}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.purple
  },
  restaurantDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: scale(20),
  },
  image: {
    width: scale(80),
    height: scale(80),
  },
  restaurantName: {
  },
});
export default DeliveryItemDetails