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

    const handleForm = field => {
        switch (field.fieldType) {
            case 'Input':
                return (
                    <InputText
                        attributes={field}
                        form={form}
                        handleFormData={handleFormData}
                    />
                );
            case 'Radio':
                return (
                    <InputRadio
                        attributes={field}
                        form={form}
                        handleFormData={handleFormData}
                    />
                );
            case 'Checkbox':
                return (
                    <InputCheckbox
                        attributes={field}
                        form={form}
                        handleFormData={handleFormData}
                    />
                );
            case 'Dropdown':
                return (
                    <InputDropdown
                        attributes={field}
                        form={form}
                        handleFormData={handleFormData}
                    />
                );
            case 'Date':
                return (
                    <InputDate
                        attributes={field}
                        form={form}
                        handleFormData={handleFormData}
                    />
                );
            case 'Divider':
                return <Divider />;
            case 'Spacer':
                return <Spacer attributes={field} />;
            case 'Paragraph':
                return <TextParagraph attributes={field} />;
            case 'Heading':
                return <TextHeading attributes={field} />;
            case 'MultiSelect':
                return (
                    <InputMultiSelect
                        attributes={field}
                        form={form}
                        handleFormData={handleFormData}
                    />
                );
            case 'Button':
                return (
                    <InputButton
                        attributes={field}
                        form={form}
                        handleFormData={handleFormData}
                    />
                );
            case 'FormRowContainer':
                return (
                    <FormRowContainer attributes={field} form={form} setForm={setForm} />
                );
            case 'Custom': {
                const { Component } = field;
                return <Component />;
            }
        }
    };

    return formFormat.map((formData, ind) => (handleForm(formData)))
}

export default memo(Form);