import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import commonStyles from '../../../common/styles';
import COLORS from '../../../utils/color';
import {scale} from '../../../utils/scale';
import IMAGES from '../../../assets/images';
import {dateFormatter} from '../../../common/utility/validators';

export const RestaurantDetails = ({data}) => {
  return (
    <View
      style={{backgroundColor: 'white'}}
      className="px-5 py-4 mx-4 mb-6 bg-white rounded-xl shadow-lg my-5 ">
      <View style={styles.restaurantDetails}>
        <Image source={IMAGES.comingSoon} style={styles.image} />
        <View style={commonStyles.shadow}>
          <Text
            style={styles.restaurantName}
            className="text-secondary font-bold text-green">
            {data.restaurantName}
          </Text>
          <Text className="font-bold text-black">{`Meeting: ${data.meetingWith}`}</Text>
          <Text className="font-bold text-black">{`Date: ${dateFormatter(
            data.nextMeetingSchedule,
          )}`}</Text>
        </View>
      </View>
      <View>
        <Text className="font-bold text-black">{`Enquiry ID: ${data?.contactNumber}`}</Text>
        <Text className="font-bold text-black">{`email: ${data?.email}`}</Text>
      </View>
      <Text className="font-bold text-black">
        {`Address: ${data?.address?.street} ,${data.address.city}`}
      </Text>
      <Text className="font-bold text-black">{`Zip Code: ${data?.address?.zipcode}`}</Text>
    </View>
  );
};

export const RestaurantDetailsOnBoardingDetails = ({data}) => {
  return (
    <View
      style={{backgroundColor: 'white'}}
      className="px-5 py-4 mx-4 mb-6 bg-white rounded-xl shadow-lg my-5 ">
      <View style={styles.restaurantDetails}>
        <Image source={IMAGES.comingSoon} style={styles.image} />
        <View style={commonStyles.shadow}>
          <Text
            style={styles.restaurantNameOb}
            className="text-secondary font-bold">
            {data.restaurantName}
          </Text>
        </View>
      </View>
      <View>
        <Text className="font-bold text-black">{`Enquiry ID: ${data?.contactNumber}`}</Text>
        <Text className="font-bold text-black">{`email: ${data?.email}`}</Text>
        {/* <Text>{`email: ${data?.email}`}</Text> */}
      </View>
      {/* <Text>{`Address: ${data?.profile?.address?.s} ,${data.address.city}`}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.purple,
  },
  restaurantDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: scale(20),
  },
  image: {
    width: scale(80),
    height: scale(80),
  },
  restaurantNameOb: {
    width: '80%',
    marginLeft: scale(10),
  },
});
export default RestaurantDetails;
