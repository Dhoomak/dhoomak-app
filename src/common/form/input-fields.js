import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import SelectDropdown from 'react-native-select-dropdown';

import IMAGES from '../../assets/images';
import Colors from '../../utils/color';

import Form from './form';
import { formatDate } from '../../utils/date-formatter';

const renderDropdownIcon = () => (
    <Image source={IMAGES.dropdownIcon} style={styles.dropDownIcon} />
);

const InputText = ({ attributes, handleFormData }) => {
    const {
        extraProps = {},
        value = '',
        name = '',
        label = '',
        containerStyle = {},
    } = attributes;

    return (
        <>
            <View style={[styles.formFieldContainer, containerStyle]}>
                {label ? <Text style={styles.formInputTitle}>{label}</Text> : <></>}
                <TextInput
                    style={styles.formInputText}
                    value={value}
                    onChangeText={text => handleFormData(text, name)}
                    placeholderTextColor={Colors.lightGrey}
                    {...extraProps}
                />
            </View>
        </>
    );
};

const InputRadio = ({ attributes, form, handleFormData }) => {
    const {
        extraProps = {},
        label = '',
        name = '',
        radio = [
            { title: 'Yes', value: true },
            { title: 'No', value: false },
        ],
    } = attributes;

    return (
        <>
            <View style={styles.formFieldContainer}>
                <Text style={[styles.formInputTitle, { marginBottom: 4 }]}>{label}</Text>
                <View style={styles.formRadioContainer}>
                    {radio.map(text => (
                        <TouchableOpacity
                            onPress={() => handleFormData(text.value, name)}
                            style={styles.radioContainer(text.value === form[name])}
                            {...extraProps}>
                            <Text style={styles.radioText(text.value === form[name])}>
                                {text.title}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </>
    );
};

const InputCheckbox = ({ attributes, form, handleFormData }) => {
    const { value = '', name = '', label = '', extraProps = {} } = attributes;

    return (
        <>
            <View style={styles.checkboxContainer}>
                <View style={styles.checkboxMainContainer}>
                    <TouchableOpacity
                        style={[styles.checkbox]}
                        onPress={() => {
                            handleFormData(!value, name);
                        }}>
                        {value && <View style={styles.checkIcon} />}
                    </TouchableOpacity>
                </View>
                <View style={styles.checkboxTextContainer}>
                    <Text style={styles.checkboxText}>{label}</Text>
                </View>
            </View>
        </>
    );
};

const InputDropdown = ({ attributes, handleFormData }) => {
    const {
        extraProps = {},
        label = '',
        name = '',
        data = [],
        setValueKey = '',
        containerStyle = {},
    } = attributes;
    const [isSelected, setIsSelected] = useState(false);
    return (
        <>
            <View style={[styles.formFieldContainer, containerStyle]}>
                <Text style={styles.formInputTitle}>{label}</Text>
                <SelectDropdown
                    data={data}
                    defaultButtonText={`Select ${label}`}
                    buttonStyle={styles.formInputDropdown(extraProps?.disabled)}
                    buttonTextStyle={styles.formInputDropDownText(isSelected)}
                    rowTextStyle={{ textTransform: 'capitalize' }}
                    selectedRowTextStyle={{ color: Colors.black }}
                    selectedRowStyle={{ backgroundColor: Colors.lightGrey }}
                    renderDropdownIcon={renderDropdownIcon}
                    dropdownIconPosition="right"
                    onSelect={selectedItem => {
                        setIsSelected(true);
                        if (setValueKey) {
                            handleFormData(selectedItem[setValueKey], name);
                        } else {
                            handleFormData(selectedItem, name);
                        }
                    }}
                    {...extraProps}
                />
            </View>
        </>
    );
};

const InputMultiSelect = ({ attributes, form, handleFormData }) => {
    const { extraProps = {}, label = '', buttons = [] } = attributes;

    return (
        <>
            <View style={styles.formFieldContainer}>
                {label ? <Text style={[styles.formInputTitle, { marginBottom: 4 }]}>{label}</Text> : <></>}
                <View style={styles.formRadioContainer}>
                    {buttons.map(({ key, title }) => (
                        <TouchableOpacity
                            key={key}
                            onPress={() => handleFormData(!form[key], key)}
                            style={styles.radioContainer(form[key])}>
                            <Text style={styles.radioText(form[key])}>{title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </>
    );
};

const InputDate = ({ attributes, form, handleFormData }) => {
    const {
        name = '',
        label = '',
        icon = IMAGES.calenderIcon,
        extraProps = {},
        containerStyle = {},
    } = attributes;

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");

    let formattedDate;
    if (selectedDate) {
        formattedDate = formatDate(selectedDate);
    }

    const handleDateChange = (event, date) => {
        setShowDatePicker(false);
        if (date) {
            const selectedNewDate = new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate(),
            );
            setSelectedDate(selectedNewDate);
            handleFormData(selectedNewDate, name);
        }
    };

    return (
        <>
            <View style={[styles.pickerContainer, containerStyle]}>
                <Text style={styles.formInputTitle}>{label}</Text>
                <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                    <View style={styles.picker}>
                        <Text style={styles.pickerText}>
                            {selectedDate ? formattedDate : 'Select Date'}
                        </Text>
                        <Image source={icon} style={styles.pickerIcon} />
                    </View>
                </TouchableOpacity>
            </View>
            {showDatePicker && Platform.OS === 'android' && (
                <DateTimePicker
                    value={selectedDate || new Date}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                    format="DD-MM-YYYY"
                    {...extraProps}
                />
            )}
        </>
    );
};

const InputTime = ({ attributes, form, handleFormData }) => {
    const {
        name = '',
        label = '',
        icon = IMAGES.TimeIcon, // Assuming you have an icon named TimeIcon
        extraProps = {},
        containerStyle = {},
    } = attributes;

    const [showTimePicker, setShowTimePicker] = useState(false);
    const [selectedTime, setSelectedTime] = useState("");

    const handleTimeChange = (event, time) => {
        setShowTimePicker(false);
        if (time) {
            const selectedNewTime = new Date(time);
            setSelectedTime(selectedNewTime);
            handleFormData(selectedNewTime, name);
        }
    };

    return (
        <>
            <View style={[styles.pickerContainer, containerStyle]}>
                <Text style={styles.formInputTitle}>{label}</Text>
                <TouchableOpacity onPress={() => setShowTimePicker(true)}>
                    <View style={styles.picker}>
                        <Text style={styles.pickerText}>
                            {selectedTime ? selectedTime.toLocaleTimeString() : 'Select Time'}
                        </Text>
                        <Image source={icon} style={styles.pickerIcon} />
                    </View>
                </TouchableOpacity>
            </View>
            {showTimePicker && Platform.OS === 'android' && (
                <DateTimePicker
                    value={selectedTime || new Date()}
                    mode="time"
                    display="default"
                    onChange={handleTimeChange}
                    {...extraProps}
                />
            )}
        </>
    );
};

const TextHeading = ({ attributes }) => {
    const {
        text = '',
        style = {},
        extraProps = {},
        containerStyle = {},
    } = attributes;

    return (
        <View style={[styles.formFieldContainer, containerStyle]}>
            <Text style={[styles.textHeading, style]} {...extraProps}>
                {text}
            </Text>
        </View>
    );
};

const TextParagraph = ({ attributes }) => {
    const { text = '', style = {}, extraProps = {} } = attributes;

    return (
        <View style={styles.formFieldContainer}>
            <Text style={[styles.textParagraph, style]} {...extraProps}>
                {text}
            </Text>
        </View>
    );
};

const InputButton = ({ attributes }) => {
    const {
        label = '',
        onSubmit = () => { },
        extraProps = {},
        style = {},
        containerStyle = {},
        textStyle = {},
    } = attributes;

    return (
        <View style={[styles.formBottom, containerStyle]}>
            <TouchableOpacity
                style={[styles.btn, style]}
                onPress={onSubmit}
                {...extraProps}>
                <Text style={[styles.btnText, textStyle]}>{label}</Text>
            </TouchableOpacity>
        </View>
    );
};

const FormRowContainer = ({ attributes, form, setForm }) => {
    const { children = [], style = {} } = attributes;
    return (
        <View style={[styles.formRowContainer, style]}>
            {<Form form={form} setForm={setForm} formFormat={children} />}
        </View>
    );
};

const Divider = () => <View style={styles.space} />;

const Spacer = ({ attributes }) => {
    const { style = {} } = attributes;

    return <View style={[styles.spacer, style]} />;
};

const styles = StyleSheet.create({
    formFieldContainer: {
        marginBottom: 10,
    },
    formInputTitle: {
        color: Colors.black,
        marginLeft: 5,
    },
    formInputText: {
        backgroundColor: Colors.white,
        borderColor: Colors.lightGrey,
        borderWidth: 1,
        borderRadius: 7,
        paddingBottom: 0,
        paddingTop: 6,
        paddingHorizontal: 12,
        fontSize: 15,
        color: Colors.black,
        textAlignVertical: 'top',
    },
    formInputDropdown: isDisabled => ({
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.lightGrey,
        borderRadius: 7,
        width: '100%',
        padding: 8,
        paddingHorizontal: 5,
        height: 'auto',
        opacity: isDisabled ? 0.5 : 1,
    }),
    formInputDropDownText: isSelected => ({
        fontSize: 15,
        textAlign: 'left',
        textTransform: 'capitalize',
        color: isSelected ? Colors.black : Colors.lightGrey,
    }),
    dropDownIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginRight: 8,
    },
    formSubTitle: {
        color: Colors.black,
        marginBottom: 7,
    },
    formRadioContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    formClickContainer: {
        marginLeft: 12,
        marginTop: 4,
    },
    formClickText: {
        color: Colors.primary,
        textDecorationColor: Colors.primary,
        textDecorationLine: 'underline',
    },
    formRowContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: 10,
        marginBottom: 2,
    },
    formRow: { flex: 1 },
    radioContainer: active => ({
        backgroundColor: active ? Colors.primary : Colors.lightGrey,
        borderRadius: 20,
        padding: 4,
        paddingHorizontal: 15,
    }),
    radioText: active => ({
        color: active ? Colors.black : Colors.darkGrey,
    }),
    checkboxContainer: {
        gap: 10,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 8,
    },
    checkboxMainContainer: {
        width: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: Colors.primary,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkIcon: {
        padding: 6,
        backgroundColor: Colors.primary,
        borderRadius: 3,
    },
    checkboxTextContainer: {
        flex: 1,
    },
    checkboxText: {
        color: Colors.primary,
        fontSize: 15,
    },
    uploadDocsContainer: {
        borderRadius: 20,
        padding: 6,
        paddingHorizontal: 15,
        borderColor: Colors.primary,
        borderWidth: 1,
    },
    uploadDocsText: {
        color: Colors.primary,
    },
    textParagraph: {
        color: Colors.black,
        fontSize: 15,
        lineHeight: 22,
    },
    textHeading: {
        color: Colors.black,
        fontSize: 20,
        fontWeight: 800,
    },
    formBottom: {},
    space: {
        marginTop: 5,
        marginBottom: 15,
        height: 1,
        width: '100%',
        backgroundColor: Colors.black,
    },
    spacer: {
        marginVertical: 10,
        width: '100%',
    },
    btn: {
        padding: 7,
        borderRadius: 10,
        backgroundColor: Colors.primary,
    },
    btnText: {
        color: Colors.black,
        fontSize: 16,
        fontWeight: 600,
        textAlign: 'center',
    },
    pickerContainer: { flex: 1 },
    pickerHeading: {},
    picker: {
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.lightGrey,
        borderRadius: 5,
        padding: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    pickerIcon: {
        width: 18,
        height: 18,
    },
    pickerText: { color: Colors.lightGrey },
});

export {
    InputText,
    InputButton,
    InputRadio,
    InputDropdown,
    Divider,
    InputMultiSelect,
    FormRowContainer,
    Spacer,
    TextParagraph,
    InputCheckbox,
    TextHeading,
    InputDate,
    InputTime
};