import {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import COLORS from '../../../utils/color';
import Form from '../../../common/form';
import {toast} from '../../../utils/toast';
import {EXECUTIVE} from '../../../utils/strings/screen-name';
import {createAccountAction} from '../thunk/executive-thunk';
import {useDispatch} from 'react-redux';
import useAppNavigation from '../../../common/hooks/use-app-navigation';

const initialState = {
  restaurantName: '',
  name: '',
  mobileNo: '',
  email: '',
  restaurantAddress: '',
  city: '',
  pinCode: '',
  gstNo: '',
  panNo: '',
};

function CreateAccount() {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const [navigation, SCREEN] = useAppNavigation();

  const handleSubmit = () => {
    dispatch(createAccountAction({enquiryForm: form, navigation, SCREEN}));
  };
  const formFormat = [
    {
      fieldType: 'Input',
      name: 'restaurantName',
      label: 'Restaurant Name',
      value: form.restaurantName,
      extraProps: {
        placeholder: 'Enter Restaurant Name',
      },
    },
    {
      fieldType: 'Input',
      name: 'name',
      label: 'Name',
      value: form.name,
      extraProps: {
        placeholder: 'Enter Name',
      },
    },
    {
      fieldType: 'Input',
      name: 'mobileNo',
      label: 'Mobile Number',
      value: form.mobileNo,
      extraProps: {
        placeholder: 'Enter Mobile Number',
        maxLength: 10,
        keyboardType: 'numeric',
      },
    },
    {
      fieldType: 'Input',
      name: 'email',
      label: 'Email',
      value: form.email,
      extraProps: {
        placeholder: 'Enter Email',
      },
    },
    {
      fieldType: 'Divider',
    },
    {
      fieldType: 'Heading',
      text: 'Restaurant Address',
      containerStyle: {
        marginBottom: 8,
      },
      style: {
        fontWeight: 'bold',
        fontSize: 15,
      },
    },
    {
      fieldType: 'Input',
      name: 'restaurantAddress',
      label: '',
      value: form.restaurantAddress,
      extraProps: {
        placeholder: 'Enter Your Address',
      },
    },
    {
      fieldType: 'FormRowContainer',
      children: [
        {
          fieldType: 'Input',
          name: 'city',
          label: '',
          value: form.city,
          extraProps: {
            placeholder: 'City',
          },
          containerStyle: {flex: 1},
        },
        {
          fieldType: 'Input',
          name: 'pinCode',
          label: '',
          value: form.pinCode,
          extraProps: {
            placeholder: 'Pin Code',
            keyboardType: 'numeric',
            maxLength: 6,
          },
          containerStyle: {flex: 1},
        },
      ],
    },
    {
      fieldType: 'Divider',
    },
    {
      fieldType: 'Input',
      name: 'gstNo',
      label: 'GST Number (Optional)',
      value: form.gstNo,
      extraProps: {
        placeholder: 'Enter GST Number',
      },
    },
    {
      fieldType: 'Input',
      name: 'panNo',
      label: 'PAN Number (Optional)',
      value: form.panNo,
      extraProps: {
        placeholder: 'Enter PAN Number',
      },
    },
    {
      fieldType: 'Button',
      name: 'save',
      label: `Submit`,
      onSubmit: handleSubmit,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <Form form={form} setForm={setForm} formFormat={formFormat} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.white,
  },
});

export default CreateAccount;
