import { View, Text, Image, StyleSheet,FlatList, ScrollView } from 'react-native';
import React from 'react';
import commonStyles from '../../../common/styles';
import { scale } from '../../../utils/scale';
import COLORS from '../../../utils/color';
import { PrimaryButton } from '../../../common/button';
import IMAGES from '../../../assets/images';
import {RestaurantDetails} from '../components/restaurant-details';
import Comments, { SubscriptionType } from '../components/comments';
import TotalItems from '../components/total-items';

const OnboardingDetails = () => {
  const fakeData = {
    image: 'https://example.com/restaurant-image.jpg',
    restaurantName: 'Fake Restaurant',
    ownerDetails: 'John Doe',
    address: '123 Main Street, Cityville',
    contactNumber: '123-456-7890',
    id: '123-4',
    email: 'ashifkhn02@gmail.com',
  };

  const data = [
  { id: '1', date: '12/12', levelStatus: 'Level 1', description: 'Lorem ipsum dolor sit amet, consectetur adip nonum soc' },
  { id: '2', date: '12/13', levelStatus: 'Level 2', description: 'Lorem ipsum dolor sit amet, consectetur adip nonum soc' },
  { id: '2', date: '12/13', levelStatus: 'Level 2', description: 'Lorem ipsum dolor sit amet, consectetur adip nonum soc' },
  { id: '2', date: '12/13', levelStatus: 'Level 2', description: 'Lorem ipsum dolor sit amet, consectetur adip nonum soc' },
  { id: '2', date: '12/13', levelStatus: 'Level 2', description: 'Lorem ipsum dolor sit amet, consectetur adip nonum soc' },
  { id: '2', date: '12/13', levelStatus: 'Level 2', description: 'Lorem ipsum dolor sit amet, consectetur adip nonum soc' },
  { id: '2', date: '12/13', levelStatus: 'Level 2', description: 'Lorem ipsum dolor sit amet, consectetur adip nonum soc' },
  { id: '2', date: '12/13', levelStatus: 'Level 2', description: 'Lorem ipsum dolor sit amet, consectetur adip nonum soc' },
  { id: '2', date: '12/13', levelStatus: 'Level 2', description: 'Lorem ipsum dolor sit amet, consectetur adip nonum soc' },
  { id: '2', date: '12/13', levelStatus: 'Level 2', description: 'Lorem ipsum dolor sit amet, consectetur adip nonum soc' },
  { id: '2', date: '12/13', levelStatus: 'Level 2', description: 'Lorem ipsum dolor sit amet, consectetur adip nonum soc' },
  { id: '2', date: '12/13', levelStatus: 'Level 2', description: 'Lorem ipsum dolor sit amet, consectetur adip nonum soc' },
  { id: '2', date: '12/13', levelStatus: 'Level 2', description: 'Lorem ipsum dolor sit amet, consectetur adip nonum soc' },
  { id: '2', date: '12/13', levelStatus: 'Level 2', description: 'Lorem ipsum dolor sit amet, consectetur adip nonum soc' },
  { id: '2', date: '12/13', levelStatus: 'Level 2', description: 'Lorem ipsum dolor sit amet, consectetur adip nonum soc' },
  { id: '2', date: '12/13', levelStatus: 'Level 2', description: 'Lorem ipsum dolor sit amet, consectetur adip nonum soc' },
  { id: '2', date: '12/1ß3', levelStatus: 'Level 2', description: 'Lorem ipsum dolor sit amet, consectetur adip nonum soc' },
  // Add more data items as needed
];

  const data2 = [
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



  return (
    <View style={styles.container}>
    <ScrollView > 
    <RestaurantDetails data={fakeData}/>
    <TotalItems flatListdata={data2}/>
        <SubscriptionType/>
        <Comments data={data}/>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:COLORS.purple
  },
  restaurantDetails:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:scale(20),
  },
  image: {
    width:scale(80),
    height:scale(80),
  },
  restaurantName: {
  },
});

export default OnboardingDetails;
