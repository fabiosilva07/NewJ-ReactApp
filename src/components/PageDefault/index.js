import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled, { css } from 'styled-components';

const Main = styled.main`
    background-color: #252323;
    color: var(--white);
    padding-top: 30px;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 20px;
    flex: 1;

    ${({paddingAll}) => css`
        padding: ${paddingAll};
    `}

    @media (max-width: 800px) {
        padding-bottom: 20px;
    }
`;

function PageDefault({ children ,paddingAll }) {
    return (
        <>
            <Menu/>
            <Main paddingAll={paddingAll}>
                {children}
            </Main>
            <Footer/>
        </>
    );
}

export default PageDefault;