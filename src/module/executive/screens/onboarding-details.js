import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import commonStyles from '../../../common/styles';
import {scale} from '../../../utils/scale';
import COLORS from '../../../utils/color';
import IMAGES from '../../../assets/images';
import {
  RestaurantDetails,
  RestaurantDetailsOnBoardingDetails,
} from '../components/restaurant-details';
import Comments, {SubscriptionType} from '../components/comments';
import TotalItems from '../components/total-items';

const OnboardingDetails = ({navigation, route}) => {
  const {item} = route.params;
  console.log(item, 'item in onbaording de');
  console.log(item.products, 'products');

  const data = {
    restaurantName: item.profile.name,
    ownerDetails: 'John Doe',
    street: item.profile,
    address: 'item.profile.address.city',
    address: 'item.profile.address.city',
    contactNumber: item?.profile?.phoneNumber,
    id: '123-4',
    email: item?.profile?.email,
    zipcode: item.profile.address.zipcode,
  };

  const data2 = [
    {
      itemName: 'Notebooks',
      description: 'Set of 3 ',
      quantity: 5,
    },
    {
      itemName: 'Pens',
      description: 'Blue bal',
      quantity: 10,
    },
    {
      itemName: 'Coffee Mugs',
      description: 'Ceramic mugs',
      quantity: 6,
    },
    {
      itemName: 'Desk Chair',
      description: 'Comfortable ',
      quantity: 1,
    },
    {
      itemName: 'USB Flash Drives',
      description: '32GB USB 3.0 ',
      quantity: 3,
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <RestaurantDetailsOnBoardingDetails data={data} />
        <TotalItems flatListdata={item.products} />
        <SubscriptionType item={item} />
        {/* <Comments data={commentsss} /> */}
      </ScrollView>
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

export default OnboardingDetails;
