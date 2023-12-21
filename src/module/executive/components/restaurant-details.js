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
            className="text-secondary font-bold">
            {data.restaurantName}
          </Text>
          <Text className="font-bold">{`Meeting: ${data.meetingWith}`}</Text>
          <Text className="font-bold">{`Date: ${dateFormatter(
            data.nextMeetingSchedule,
          )}`}</Text>
        </View>
      </View>
      <View>
        <Text>{`Enquiry ID: ${data?.contactNumber}`}</Text>
        <Text>{`email: ${data?.email}`}</Text>
      </View>
      <Text>{`Address: ${data?.address?.street} ,${data.address.city}`}</Text>
      <Text>{`Zip Code: ${data?.address?.zipcode}`}</Text>
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
  restaurantName: {},
});
export default RestaurantDetails;
