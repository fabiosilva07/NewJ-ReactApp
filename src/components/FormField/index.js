import React from "react";
import { FormDiv , FormInput , Label} from './styles';

function FormField({ label, type, name, value, onChange }) {
    const fieldID = `id_${name}`;
    const isTextArea = type === 'textarea';
    const tag = isTextArea ? 'textarea' : 'input';

    const hasValue = Boolean(value.length);

    return (
        <FormDiv>
            <Label>
                <FormInput
                    as={tag}
                    id={fieldID}
                    type={type}
                    value={value}
                    name={name}
                    hasValue={hasValue}
                    onChange={onChange}
                />
                <Label.Text>
                    {label}:
                </Label.Text>
            </Label>
        </FormDiv>
    );
}

export default FormField;