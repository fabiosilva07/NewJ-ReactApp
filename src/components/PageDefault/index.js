import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    background-color: #252323;
    color: var(--white);
    padding-top: 30px;
    padding-left: 5%;
    padding-right: 5%;
    flex: 1;

    @media (max-width: 800px) {
        padding-top: 20px;
      }
`;

function PageDefault({ children }) {
    return (
        <>
            <Menu/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </>
    );
}

export default PageDefault;