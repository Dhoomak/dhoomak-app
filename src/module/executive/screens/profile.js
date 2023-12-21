import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import IMAGES from '../../../assets/images';
import COLORS from '../../../utils/color';
import Icon from 'react-native-vector-icons/Ionicons';
import {getAsyncStorageObjectItem} from '../../../utils/async-storage';
import {ASYNC_STORAGE_KEY} from '../../../data/constant';

const Profile = () => {
  const [data, setData] = useState([]);
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '123 Main St, Cityville',
    dob: '01/01/1990',
    id: 12333,
  };

  const getUserData = async () => {
    try {
      const userData = await getAsyncStorageObjectItem(
        ASYNC_STORAGE_KEY.USER_DATA,
      );
      setData(userData);
      console.log(userData, 'agent data');
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      await getUserData();
    };
    fetchData();
    return () => {};
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image style={styles.avatar} source={IMAGES.comingSoon} />
          <Text style={styles.name}>{userData.name}</Text>
          <Text style={styles.id} className="text-red">
            Employee Id:{userData.id}
          </Text>
        </View>
        <View className="flex flex-col gap-1 mt-5">
          <Text style={styles.input} className="py-2 px-3">
            Email: {userData.email}
          </Text>
          <Text style={styles.input} className="py-2 px-3">
            Address: {userData.address}
          </Text>
          <Text style={styles.input} className="py-2 px-3">
            Date of Birth: {userData.dob}
          </Text>
          <Text style={styles.input} className="py-2 px-3">
            Number: {userData.dob}
          </Text>
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
    marginVertical: 20,
    backgroundColor: 'red',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: '#403B3B',
    marginBottom: 5,
    borderBottomWidth: 0.5,
  },
});

export default Profile;

// ionicons/MaterialCommunityIcons
// email-outline,call,location-pin
