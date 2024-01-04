import { useState } from 'react';
import { SafeAreaView, TouchableOpacity, Text, View, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { useDispatch } from 'react-redux';

import Form from '../../../common/form';
import useAppNavigation from '../../../common/hooks/use-app-navigation';
import DhoomakScrollView from '../../../common/components/dhoomak-scrollview';
import COLORS from '../../../utils/color';
import { toast } from '../../../utils/toast';
import { EXECUTIVE } from '../../../utils/strings/screen-name';
import { createAccountAction } from '../thunk/executive-thunk';

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
  images: [],
};

function CreateAccount() {
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const [navigation, SCREEN] = useAppNavigation();

  const handleImageClick = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.8,
      cropperStatusBarColor: COLORS.primary,
      cropperToolbarTitle: 'Crop Image',
      cropperToolbarColor: COLORS.primary,
    }).then(image => {
      console.log(image);
      console.log("PATH: ", image.path);
      setForm((prev) => ({ ...prev, images: [image.path] }))
    });
  }

  const handleSubmit = () => {
    dispatch(createAccountAction({ enquiryForm: form, navigation, SCREEN }));
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
          containerStyle: { flex: 1 },
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
          containerStyle: { flex: 1 },
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
      fieldType: 'Custom',
      Component: () => (
        <View className='mb-2'>
          <View className='flex flex-row justify-between mb-2'>
            <TouchableOpacity
              onPress={handleImageClick}
              className='p-1 px-4 bg-primary rounded-lg '
            >
              <Text className='text-black'>{form?.images[0] ? "Retake Image" : "Take Image"}</Text>
            </TouchableOpacity>
          </View>
          {form?.images[0] ?
            <View className='border border-grey rounded-md overflow-hidden h-12 w-12'>
              <Image source={{ uri: form?.images[0] }} className='w-full h-full' resizeMode='center' />
            </View>
            :
            <></>
          }
        </View>

      ),
    },
    {
      fieldType: 'Button',
      name: 'save',
      label: `Submit`,
      onSubmit: handleSubmit,
    },
  ];

  return (
    <SafeAreaView className='flex-1 p-2 bg-white'>
      <DhoomakScrollView>
        <Form form={form} setForm={setForm} formFormat={formFormat} />
      </DhoomakScrollView>
    </SafeAreaView>
  );
}

export default CreateAccount;
