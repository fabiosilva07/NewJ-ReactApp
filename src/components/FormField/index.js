import React from "react";
import { FormDiv , FormInput , Label} from './styles';

function FormField({ label, type, name, value, onChange ,suggestions}) {
    const fieldId = `id_${name}`;
    const isTextArea = type === 'textarea';
    const tag = isTextArea ? 'textarea' : 'input';

    const hasValue = Boolean(value.length);
    const hasSuggestions = Boolean(suggestions.length);

    return (
        <FormDiv>
            <Label>
                <FormInput
                    as={tag}
                    id={fieldId}
                    type={type}
                    value={value}
                    name={name}
                    hasValue={hasValue}
                    onChange={onChange}
                    autoComplete={hasSuggestions ? 'off' : 'on'}
                    list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
                />
                <Label.Text>
                    {label}:
                </Label.Text>

                {
                    hasSuggestions && (
                        <datalist id={`suggestionFor_${fieldId}`}>
                        {
                        suggestions.map((suggestion) => (
                            <option value={suggestion} key={`suggestionFor_${fieldId}_option${suggestion}`}>
                            {suggestion}
                            </option>
                        ))
                        }
                        </datalist>
                    )
                }
            </Label>
        </FormDiv>
    );
}

FormField.defaultProps = {
    type: 'text',
    value: '',
    onChange: () => {},
    suggestions: [],
  };

export default FormField;