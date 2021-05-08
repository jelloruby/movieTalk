import React, { useState } from 'react';
import styled from 'styled-components';

const NavBtn = styled.div`
    width: 40px;
    height: 40px;
    background: red;
    position: fixed;
    top: 0;
    left: 0;
    
    @media screen and (max-width: 900px) {
        
    }
`

function HambergerBtn() {
    return (
        <NavBtn>
            <div></div>
            <div></div>
            <div></div>
        </NavBtn>
    )
};

export default HambergerBtn;
