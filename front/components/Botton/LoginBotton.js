import React from 'react';
import styled from 'styled-components';

const LoginBtn = styled.button`
    width: 100%;
    font-size : 18px;
    padding: 10px 0;
    border: none;
    border-radius: 5px;
    margin-top: 16px;
    background: white;
    font-family: 'GmarketSansMedium';
    cursor: pointer;
`

function LoginBotton({ bottonName }) {
    return (
        <LoginBtn>{bottonName}</LoginBtn>
    )
};

export default LoginBotton;
