import React, { useState } from 'react'
import {
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView
} from 'react-native'
import Form from '../../../common/form';
import COLORS from '../../../utils/color';
import { getMinimumDate } from '../../../utils/date-formatter';

const initialState = {
    meetingWith: '',
    restaurantName: '',
    name: '',
    mobileNo: '',
    email: '',
    restaurantAddress: '',
    city: '',
    pinCode: '',
    businessType: '',
    selectedInventory: false,
    selectedDigiMenu: false,
    selectedMarketing: false,
    serviceRequirementDetail: '',
    nextMeetingScheduled: '',
    comment: '',
    interest: '',
};

const typesOfServiceSelected = [
    { title: 'Inventory', key: 'selectedInventory' },
    { title: 'Digi Menu', key: 'selectedDigiMenu' },
    { title: 'Marketing', key: 'selectedMarketing' },
];

const businessTypeOptions = [
    { title: 'Service', value: 'Service' },
    { title: 'Outlet', value: 'Outlet' },
];
const interestOptions = [
    { title: 'Low', value: 'LOW' },
    { title: 'Medium', value: 'MEDIUM' },
    { title: 'High', value: 'HIGH' },
];

const meetingWith = ['Restaurant Owner', 'Manager'];

const minimumDate = getMinimumDate();

function EnquiryForm() {
    const [form, setForm] = useState(initialState);

    const handleSubmit = () => {
        console.log(form);
    }

    const formFormat = [
        {
            fieldType: 'Dropdown',
            name: 'meetingWith',
            label: 'Meeting With',
            data: meetingWith,
            extraProps: {
                defaultValue: form.meetingWith,
            },
        },
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
            text: "Restaurant Address",
            containerStyle: {
                marginBottom: 8,
            },
            style: {
                fontWeight: 'bold',
                fontSize: 16,
                color: COLORS.red,
            }
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
                        placeholder: 'City'
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
            fieldType: 'Radio',
            name: 'businessType',
            label: 'Business Type',
            value: form.businessType,
            radio: businessTypeOptions,
        },
        {
            fieldType: 'MultiSelect',
            label: 'Select Services',
            buttons: typesOfServiceSelected,
        },
        {
            fieldType: 'Input',
            name: 'serviceRequirementDetail',
            label: '',
            value: form.serviceRequirementDetail,
            extraProps: {
                placeholder: 'Enter Details',
                multiline: true,
                numberOfLines: 3,

            },
        },
        {
            fieldType: 'Divider',
        },
        {
            fieldType: 'Date',
            name: 'nextMeetingScheduled',
            label: 'Next Meeting Schedule',
            extraProps: {
                minimumDate: minimumDate,
            },
            containerStyle: {
                marginBottom: 10,
            }
        },
        {
            fieldType: 'Input',
            name: 'comment',
            label: 'Comment',
            value: form.comment,
            extraProps: {
                placeholder: 'Comment',
                multiline: true,
                numberOfLines: 3,
            },
        },
        {
            fieldType: 'Radio',
            name: 'interest',
            label: 'Interest',
            value: form.interest,
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
        <SafeAreaView style={styles.container} >
            <ScrollView style={styles.scrollContainer} >
                <Form form={form} setForm={setForm} formFormat={formFormat} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: COLORS.white
    }
})

export default EnquiryForm
