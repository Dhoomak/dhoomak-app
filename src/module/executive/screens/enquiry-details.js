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
import {PrimaryButton} from '../../../common/button';
import IMAGES from '../../../assets/images';
import RestaurantDetails from '../components/restaurant-details';
import Comments from '../components/comments';
import {dateFormatter} from '../../../common/utility/validators';
const EnquiryDetails = ({navigation, route}) => {
  const fakeData = {
    image: 'https://example.com/restaurant-image.jpg',
    restaurantName: 'Fake Restaurant',
    ownerDetails: 'John Doe',
    address: '123 Main Street, Cityville',
    contactNumber: '123-456-7890',
    id: '123-4',
    email: 'ashifkhn02@gmail.com',
  };
  const {item} = route.params;
  console.log(item, 'iyems');

  const renderItem = ({item, index}) => (
    <View
      className="px-5 py-4 mx-4 bg-white rounded-xl shadow-lg mb-2"
      key={index}>
      <View style={[commonStyles.flexColumn]}>
        <View style={[commonStyles.flexRowSB]} className="my-2">
          <Text className="font-bold"> Date: dateF {item.date}</Text>
          <Text className="font-bold">Level Status: {item.levelStatus}</Text>
        </View>
        <Text>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <RestaurantDetails data={item} />
      <ScrollView>
        <Comments data={item.comments} />
      </ScrollView>
      <PrimaryButton
        title="Add new update"
        onClick={() => {
          navigation.navigate('AddNewUpdate', {
            item,
          });
        }}
      />
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

export default EnquiryDetails;
