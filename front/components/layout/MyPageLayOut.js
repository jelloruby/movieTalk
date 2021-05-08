import React from 'react'
import Nav from '../Menu/Nav';
import styled from 'styled-components';

const MyPageChildren = styled.div`
    margin-left: 200px;
    box-sizing: border-box;

    @media screen and (max-width: 900px) {
        margin-left: 0;
    }
`

function MyPageLayOut({ children }) {
    return (
        <div>
            <Nav />
            <MyPageChildren>
                { children }
            </MyPageChildren>
        </div>
    )
};

export default MyPageLayOut;
