import { View, Text, Image, StyleSheet,FlatList } from 'react-native';
import React from 'react';
import commonStyles from '../../../common/styles';
import { scale } from '../../../utils/scale';
import COLORS from '../../../utils/color';
import { PrimaryButton } from '../../../common/button';
import IMAGES from '../../../assets/images';
const EnquiryDetails = () => {
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
  // Add more data items as needed
];

const renderItem = ({ item,index}) => (
      <View className="px-5 py-4 mx-4 mb-6 bg-white rounded-xl shadow-lg mb-2" key={index}>
        <View style={[commonStyles.flexColumn]}>
          <View style={[commonStyles.flexRowSB]} className="my-2">
            <Text className="font-bold">Date:{item.date}</Text>
           <Text className="font-bold">Level Status: {item.levelStatus}</Text>
          </View>
          <Text>
            {item.description}
          </Text>
        </View>
      </View>
);

  return (
    <View style={styles.container}>
      <View style={{backgroundColor:"white"}} className="px-5 py-4 mx-4 mb-6 bg-white rounded-xl shadow-lg my-5 ">
        <View  style={styles.restaurantDetails}>
        <Image source={IMAGES.comingSoon} style={styles.image} />
        <View style={commonStyles.shadow}>
              <Text style={styles.restaurantName} className="text-secondary font-bold">{fakeData.restaurantName}</Text>
              <Text className="font-sm">{`Owner: ${fakeData.ownerDetails}`}</Text>
              <Text className="font-bold">{`Enquiry ID: ${fakeData.id}`}</Text>
        </View>
        </View>
        <View>
          <Text>
            {`Enquiry ID: ${fakeData.contactNumber}`}
          </Text>
          <Text>
            {`email: ${fakeData.email}`}
          </Text>
        </View>
        <Text>
            {`Address: ${fakeData.address}`}
        </Text>
      </View>
      <View style={[commonStyles.flexRowSB]} className="px-5 mb-3">
        <Text className="font-bold">Comment</Text>
        <Text className="font-bold">Visited: 2 Times</Text>
      </View>
            <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator ={false}
          />
          <PrimaryButton title="Add new update"/>
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

export default EnquiryDetails;
