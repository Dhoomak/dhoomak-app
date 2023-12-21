import React from 'react';
import { View, Text, Image, StyleSheet, } from 'react-native';
import IMAGES from '../../../assets/images';
import COLORS from '../../../utils/color';
import Icon from 'react-native-vector-icons/Ionicons';

const DeliveryProfile = () => {
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '123 Main St, Cityville',
    dob: '01/01/1990',
    id:12333,
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Image style={styles.avatar} source={IMAGES.comingSoon} />
            <Text style={styles.name}>{userData.name}</Text>
            <Text style={styles.id} className="text-red">Employee Id:{userData.id}</Text>
        </View>
        <View className="flex flex-col gap-1 mt-5">
            <Text style={styles.input} className="py-2 px-3">Email: {userData.email}</Text>
            <Text style={styles.input} className="py-2 px-3">Address: {userData.address}</Text>
            <Text style={styles.input} className="py-2 px-3">Date of Birth: {userData.dob}</Text>
            <Text style={styles.input} className="py-2 px-3">Number: {userData.dob}</Text>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.purple,
  },
  avatar: {
    width: 100,
    height: 100,
    marginVertical:20,
    backgroundColor: 'red',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input:{
    fontSize: 16,
    // fontWeight: 'bold',
    color:"#403B3B",
    marginBottom: 5,
    borderBottomWidth:0.5,
  }
});

export default DeliveryProfile;




// ionicons/MaterialCommunityIcons
// email-outline,call,location-pin