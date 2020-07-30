import styled, { css } from 'styled-components';

export const FormDiv = styled.div`
    position: relative;

    textarea{
        min-height: 150px;
    }
    input[type='color']{
        padding-left: 56px;
    }
`;

export const Label = styled.label`

`;
Label.Text = styled.span`
    color: #E5E5E5;
    height: 57px;
    position: absolute; 
    top: 0;
    left: 16px;
    display: flex;
    align-items: center;
    
    transform-origin: 0% 0%;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;

    transition: .1s ease-in-out;
`;

export const FormInput = styled.input`
    color: #F5F5F5;
    background: #53585D;
    height: 57px;
    font-size: 18px;
    width: 100%;
    display: block;

    outline: 0;
    border: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid #53585D;

    padding: 16px 16px;
    margin-bottom: 45px;

    resize: none;
    border-radius: 4px;
    transition: border-color .3s;

    &:focus{
        border-bottom-color: var(--backEnd);
    }
    &:focus:not([type='color']) + span{
        transform: scale(.6) translateY(-11px);
    }

    ${function ({ hasValue }) {
        return hasValue && css`
        &:not([type='color']) + span{
            transform: scale(.6) translateY(-11px);
        }
        `
    }}
`; 