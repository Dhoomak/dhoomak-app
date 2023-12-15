import React, { memo, useCallback } from 'react';
import {
    InputButton,
    InputText,
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
} from './input-fields';

function Form(props) {
    const { form = {}, setForm = () => { }, formFormat = [] } = props;

    const handleFormData = useCallback((value, key) => {
        setForm(prevFormData => ({ ...prevFormData, [key]: value }));
    }, []);

    const handleForm = (field, ind) => {
        switch (field.fieldType) {
            case 'Input':
                return (
                    <InputText
                        key={ind}
                        attributes={field}
                        form={form}
                        handleFormData={handleFormData}
                    />
                );
            case 'Radio':
                return (
                    <InputRadio
                        key={ind}
                        attributes={field}
                        form={form}
                        handleFormData={handleFormData}
                    />
                );
            case 'Checkbox':
                return (
                    <InputCheckbox
                        key={ind}
                        attributes={field}
                        form={form}
                        handleFormData={handleFormData}
                    />
                );
            case 'Dropdown':
                return (
                    <InputDropdown
                        key={ind}
                        attributes={field}
                        form={form}
                        handleFormData={handleFormData}
                    />
                );
            case 'Date':
                return (
                    <InputDate
                        key={ind}
                        attributes={field}
                        form={form}
                        handleFormData={handleFormData}
                    />
                );
            case 'Divider':
                return (
                    <Divider
                        key={ind}
                    />
                );
            case 'Spacer':
                return (
                    <Spacer
                        key={ind}
                        attributes={field}
                    />
                );
            case 'Paragraph':
                return (
                    <TextParagraph
                        key={ind}
                        attributes={field}
                    />
                );
            case 'Heading':
                return (
                    <TextHeading
                        key={ind}
                        attributes={field}
                    />
                );
            case 'MultiSelect':
                return (
                    <InputMultiSelect
                        key={ind}
                        attributes={field}
                        form={form}
                        handleFormData={handleFormData}
                    />
                );
            case 'Button':
                return (
                    <InputButton
                        key={ind}
                        attributes={field}
                        form={form}
                        handleFormData={handleFormData}
                    />
                );
            case 'FormRowContainer':
                return (
                    <FormRowContainer
                        key={ind}
                        attributes={field}
                        form={form}
                        setForm={setForm}
                    />
                );
            case 'Custom': {
                const { Component } = field;
                return (
                    <Component
                        key={ind}
                    />
                );
            }
        }
    };

    return formFormat.map((formData, ind) => (handleForm(formData, ind)))
}

export default memo(Form);