import React from 'react'
import Nav from '../Menu/Nav';
import styled from 'styled-components';

const SubPageChildren = styled.div`
    margin-left: 200px;
    margin-top: 60px;
    box-sizing: border-box;

    @media screen and (max-width: 900px) {
        margin-left: 0;
    }
`

function SubPageLayout({ children }) {
    return (
        <div>
            <Nav />
            <SubPageChildren>
                { children }
            </SubPageChildren>
        </div>
    )
};

export default SubPageLayout
