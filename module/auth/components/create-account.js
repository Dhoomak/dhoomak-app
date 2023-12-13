import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Pressable, Image } from 'react-native';
import { PrimaryButton } from './buttons';
import { scale } from '../../../utils/scale';



const CreateAccountScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const handleResetPassword= () => {
    console.log('Logging in with:', username);
    navigation.navigate('VerifyPassword', {
        username: username,
        otherParam: 'anything you want here',
    });
  };

  const backHandler=()=>{
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
        <Pressable onPress={backHandler}>
            <Image
                source={require("./../../assets/Group37.png")}
                style={styles.image}
            />
        </Pressable>

      <View style={styles.loginTextContainer}>
          <Text style={styles.title}>Forgot Password!</Text>
          <Text style={styles.loginText}>
          Reset your password
          </Text>
      </View>
      <View style={styles.inputContainer}>
          <View>
              <Text style={styles.inputTitle}>Enter your Email or Phone</Text>
              <TextInput
                style={styles.input}
                // placeholder="Username"
                onChangeText={(text) => setUsername(text)}
                value={username}
              />
          </View>
          <Pressable>
                  <Text style={styles.forgotPassWord}>
                      {/* Forgot Password? */}
                  </Text>
          </Pressable>
          <PrimaryButton onClick={handleResetPassword} title="Submit"/>
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
