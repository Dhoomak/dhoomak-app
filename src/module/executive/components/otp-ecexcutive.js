import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Modal, StyleSheet, TextInput } from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import commonStyles from '../../../common/styles';
import STRINGS from '../../../utils/strings';
import FilledButton from '../../../common/button';
import { toast } from '../../../utils/toast';
import COLORS from '../../../utils/color';
import { useDispatch } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import { EXECUTIVE } from '../../../utils/strings/screen-name';
import Icon from 'react-native-vector-icons/Ionicons';
import { scale } from '../../../utils/scale';

const OTP_LENGTH = 4;
const SEND_OTP_DELAY = 60000;

export default function OtpNumberExecutive({ mobileNumber = '' }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [otpValue, setOtpValue] = useState('');
  const route = useRoute();
  const [number, setNumber] = useState(mobileNumber);
  const [modalVisible, setModalVisible] = useState(false);
  const [disableSendButton, setDisableSendButton] = useState(false);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    let intervalId;

    if (disableSendButton && timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setDisableSendButton(false);
      setTimer(60); // Reset the timer
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [disableSendButton, timer]);

  const handleVerifyOtp = async () => {
    setDisableSendButton(true);
    console.log("timer");
  };

  return (
    <View
      className="w-full p-5 bg-white rounded-xl shadow-lg"
      style={commonStyles.shadow}
    >
      <Text className="text-base font-bold text-left text-black">
        {STRINGS.enterOtpAndVerify} {number}
      </Text>
      <Pressable
        style={{ display: 'flex', marginVertical: 8 }}
        onPress={() => setModalVisible(true)}
      >
        <Text>
          Edit Number <Icon name="pencil" size={16} color={COLORS.primary} />
        </Text>
      </Pressable>
      <View className="pb-4 px-4">
        <OTPTextView
          inputCount={OTP_LENGTH}
          tintColor={COLORS.red}
          offTintColor={COLORS.grey}
          handleTextChange={setOtpValue}
          textInputStyle={{
            borderWidth: 1,
            borderBottomWidth: 1,
            borderRadius: 10,
            fontSize: 16,
            fontWeight: '400',
          }}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              value={number}
              style={styles.input}
              onChangeText={(text) => setNumber(text)}
              maxLength={10}
              inputMode='numeric'
            />
            <View style={commonStyles.flexRowSBW_100}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => handleVerifyOtp()}
                disabled={disableSendButton}
              >
                <Text style={styles.textStyle}>
                  {disableSendButton
                    ? `Resend OTP (in ${timer}s)`
                    : 'Send OTP'}
                </Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyleSecondary}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <FilledButton text={STRINGS.verifyOtp} onPress={handleVerifyOtp} />
    </View>
  );
}



const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width:"85%",
    marginTop:"50%",
    margin: scale(20),
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginVertical:10
  },
  buttonOpen: {
    backgroundColor: 'white',
    borderColor: COLORS.primary,
    borderWidth: 1,
    color: COLORS.primary
  },
  buttonClose: {
    backgroundColor: COLORS.primary
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyleSecondary: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.primary
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: scale(60),
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:8,
    width:"100%"

  },
});
