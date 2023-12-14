import React from 'react';
import { View, StyleSheet, Text, Pressable,TouchableOpacity,Image } from 'react-native';
import commonStyles from '../../../common/styles';
import IMAGES from '../../../assets/images';
import { EXECUTIVE } from '../../../utils/strings/screen-name';

export default function ExecutiveDashboard({navigation}) {
//   const handlePress = (screenName) => {
//     // Handle press logic for each button
//     console.log(`${screenName} pressed`);
//     navigation.navigation(screenName)
//   };
  const handlePress = () => {

    navigation.navigate(EXECUTIVE.CREATE_ACCOUNT)
  };




  return (
    <View style={styles.container}>
      {/* Round Pressable Buttons */}
      <View style={styles.buttonContainer} className="mx-3">
        <View style={{display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
          <Pressable style={styles.roundButton} className="bg-white  shadow-lg " onPress={() => handlePress('Inquiry')}>
          <Image source={IMAGES.inquiry} style={styles.image}/>
          </Pressable>
        <Text>Inquiry</Text>
        </View>

         <View style={{display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
        <Pressable style={styles.roundButton} className="bg-white  shadow-lg" onPress={() => handlePress('Day Target')}>
          <Image source={IMAGES.inquiry} style={styles.image}/>
        </Pressable>
          <Text>Day Target</Text>
        </View>
         <View style={{display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
        <Pressable style={styles.roundButton} className="bg-white  shadow-lg" onPress={() => handlePress('Day Target')}>
          <Image source={IMAGES.achievement} style={styles.image}/>
        </Pressable>
          <Text>Achievement</Text>
        </View>
        <View style={{display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
        <Pressable style={styles.roundButton} className="bg-white  shadow-lg" onPress={() => handlePress('Day Target')}>
          <Image source={IMAGES.demo} style={styles.image}/>
        </Pressable>
          <Text>Demo</Text>
        </View>
                 <View style={{display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"}}>
        <Pressable style={styles.roundButton} className="bg-white  shadow-lg" onPress={() => handlePress('Day Target')}>
          <Image source={IMAGES.salary} style={styles.image}/>
        </Pressable>
          <Text>Salary</Text>
        </View>
      </View>
      <View className="mt-10">
        <Pressable className="px-5 py-8 mx-4 mb-6 bg-white rounded-xl shadow-lg flex flex-row justify-between" style={commonStyles.shadow} onPress={handlePress}>
          <Text className="text-black text-lg font-medium">Inventory</Text>
          <Image source={IMAGES.inventoryExec} style={styles.image}/>
      </Pressable>   
        <View className="px-5 py-8 mx-4 mb-6 bg-white rounded-xl shadow-lg flex flex-row justify-between" style={commonStyles.shadow}>
          <Text className="text-black text-lg font-medium">Digi Menu</Text>
          <Image source={IMAGES.comingSoon} style={styles.image}/>
      </View>   
        <View className="px-5 py-8 mx-4 mb-6 bg-white rounded-xl shadow-lg flex flex-row justify-between"style={commonStyles.shadow}>
          <Text className="text-black text-lg font-medium">Marketing</Text>
          <Image source={IMAGES.comingSoon} style={styles.image}/>
      </View>   
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  roundButton: {
    width: 60,
    height: 60,
    borderRadius: 40,
    // backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  bottomItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    padding: 20,
    margin: 5,
  },
  image:{
    height:40,
    width:40,
    resizeMode:"contain"
  }

});
