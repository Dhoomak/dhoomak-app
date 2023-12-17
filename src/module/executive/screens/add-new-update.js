import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Form from '../../../common/form';

const initialState = {
    meetingWith: '',
    employeeId: '',
    comment: '',
    interest: '',
};

const AddNewUpdate = () => {
    const [form, setForm] = useState(initialState);
    const meetingWith = ['Restaurant Owner', 'Manager'];
    const interestOptions = [
        { title: 'Low', value: 'LOW' },
        { title: 'Medium', value: 'MEDIUM' },
        { title: 'High', value: 'HIGH' },
    ];
    const handleSubmit = () => {
        console.log(form);
    }
    const formFormat = [
        {
            fieldType: 'Input',
            name: 'employeeId',
            label: 'Employee Id',
            value: form.employeeId,
            extraProps: {
                placeholder: 'Enter Restaurant Name',
            },
        },
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
        <View>
            <Form form={form} setForm={setForm} formFormat={formFormat} />
        </View>
    )
}

export default AddNewUpdate