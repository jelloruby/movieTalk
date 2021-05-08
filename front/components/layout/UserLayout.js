import React from 'react';
import Nav from '../Menu/Nav';
import styled from 'styled-components';

const UserPageChildren = styled.div`
    margin-left: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    transition: 1s;
    
    @media screen and (max-width: 900px) {
        margin-left: 0;
    }
`
function LoginLayout({ children }) {
    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Nav />
            <UserPageChildren>
                { children }
            </UserPageChildren>
        </div>
    )
};

export default LoginLayout;
