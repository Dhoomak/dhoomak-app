import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable, Image,ScrollView } from 'react-native';
import IMAGES from '../../../assets/images';
import { scale } from '../../../utils/scale';
import { PrimaryButton } from './buttons';
import { EXECUTIVE } from '../../../utils/strings/screen-name';
// PrimaryButton
// import { PrimaryButton } from './buttons';
// import { scale } from '../../../utils/scale';



const CreateAccountScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  console.log(navigation)

  const handleResetPassword = () => {
    console.log('Logging in with:', username);
    navigation.navigate('VerifyPassword', {
      username: username,
      otherParam: 'anything you want here',
    });
  };

  const backHandler = () => {
    navigation.goBack();
  } 

  const onPressHandler = () => {
    // navigation.navigate(EXECUTIVE.VERIFICATION_OTP)
  }



  return (
    <View style={styles.container}>
    <View>
      <ScrollView style={styles.inputContainer}>
          <View>
              <Text style={styles.inputTitle}>Enter Restaurant name</Text>
              <TextInput
                style={styles.input}
                // placeholder="Username"
                onChangeText={(text) => setUsername(text)}
                value={username}
              />
          </View>
          <View>
              <Text style={styles.inputTitle}>Enter Owner/Manager name</Text>
              <TextInput
                style={styles.input}
                // placeholder="Username"
                onChangeText={(text) => setUsername(text)}
                value={username}
              />
          </View>
          <View>
              <Text style={styles.inputTitle}>Email </Text>
              <TextInput
                style={styles.input}
                // placeholder="Username"
                onChangeText={(text) => setUsername(text)}
                value={username}
              />
          </View>
          <View>
              <Text style={styles.inputTitle}>Enter Restaurant name</Text>
              <TextInput
                style={styles.input}
                // placeholder="Username"
                onChangeText={(text) => setUsername(text)}
                value={username}
              />
          </View>
          <View>
              <Text style={styles.inputTitle}>Enter Restaurant name</Text>
                <TextInput
                // style={{width:"50%"}}
                style={{width:"1000%",borderBottomWidth:1}}
                placeholder="Enter your street"
                onChangeText={(text) => setUsername(text)}
                value={username}
              />
              <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",}}>
              <TextInput
                style={{width:"45%",borderBottomWidth:1}}
                placeholder="City"
                onChangeText={(text) => setUsername(text)}
                value={username}
              />
              <TextInput
                style={{width:"45%",borderBottomWidth:1}}
                placeholder="Zip Code"
                onChangeText={(text) => setUsername(text)}
                value={username}
              />
              </View>

          </View>          
          <Pressable>
                  <Text style={styles.forgotPassWord}>
                      {/* Forgot Password? */}
                  </Text>
          </Pressable>
            <View>
              <Text style={styles.inputTitle}>GST Number (Optional)</Text>
              <TextInput
                style={styles.input}
                // placeholder="Username"
                onChangeText={(text) => setUsername(text)}
                value={username}
              />
          </View>
            <View>
              <Text style={styles.inputTitle}>Pan number (Optional)</Text>
              <TextInput
                style={styles.input}
                // placeholder="Username"
                onChangeText={(text) => setUsername(text)}
                value={username}
              />
          </View>
          <PrimaryButton title="Submit" onClick={onPressHandler}/>
      </ScrollView>
    </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  image:{
    width:30,
    height:30,
    resizeMode:"contain"
  },
  loginTextContainer:{
    marginVertical:40
  },

  title: {
    fontSize:scale(24),
    marginBottom: scale(5),
    color:"#000000"
  },

  loginText:{
    fontSize:scale(16),
    marginBottom: scale(5),
    color:"#000000"
  },
  inputContainer:{


  },
  inputTitle:{
    fontWeight:"600",
    fontSize:scale(13),
    color:"#000000",
    marginBottom:5
  },

  input: {
    height: scale(53),
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius:54,
  },
  forgotPassWordButton:{
    alignItems:"flex-end",
    marginTop:5,
    marginBottom:15
  },
  forgotPassWord:{
    fontSize:scale(13),
    color:"#000000",
    fontWeight:"400"
  },
  button: {
    backgroundColor: '#FFC107',
    padding: 12,
    borderRadius: 5,
    color:"black"
  },
  buttonText: {
    color:"black",
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:scale(20)
  },
});
export default CreateAccountScreen;








