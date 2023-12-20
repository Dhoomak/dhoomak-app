import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import Form from '../../../common/form';
import {updateEnquiry} from '../api/executive-api';

const initialState = {
  meetingWith: '',
  employeeId: '',
  comment: '',
  interest: '',
};

const AddNewUpdate = ({navigation, route}) => {
  const [form, setForm] = useState(initialState);
  const {item} = route.params;
  console.log(item, 'iyems');
  const interestOptions = [
    {title: 'Low', value: 'LOW'},
    {title: 'Medium', value: 'MEDIUM'},
    {title: 'High', value: 'HIGH'},
  ];
  const handleSubmit = async () => {
    console.log(form, 'form');
    let res = {
      meetingWith,
      comment,
      interest,
      id: item._id,
    };
    const response = updateEnquiry(res);
    console.log(response);
    Alert.alert('Success', 'Inquiry updated successfully!', [
      {
        text: 'OK',
        onPress: () => {
          // Handle any additional action or navigation if needed
        },
      },
    ]);
  };
  const formFormat = [
    // {
    //   fieldType: 'Input',
    //   name: 'employeeId',
    //   label: 'Employee Id',
    //   value: form.employeeId,
    //   extraProps: {
    //     placeholder: 'Enter Restaurant Name',
    //   },
    // },
    {
      fieldType: 'Dropdown',
      name: 'meetingWith',
      label: 'Meeting With',
      data: ['Restaurant Owner', 'Manager'],
      extraProps: {
        defaultValue: form.meetingWith,
      },
    },

    {
      fieldType: 'Input',
      name: 'comment',
      label: 'Comment',
      value: form.comment,
      extraProps: {
        placeholder: 'Enter Details',
        multiline: true,
        numberOfLines: 3,
      },
    },

    {
      fieldType: 'Radio',
      name: 'interest',
      label: 'Interest',
      value: form.businessType,
      radio: interestOptions,
    },

    {
      fieldType: 'Button',
      name: 'save',
      label: `Submit`,
      onSubmit: handleSubmit,
    },
  ];

  return (
    <View className="p-2">
      <Form form={form} setForm={setForm} formFormat={formFormat} />
    </View>
  );
};

export default AddNewUpdate;
