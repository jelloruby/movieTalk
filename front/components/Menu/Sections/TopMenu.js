import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const MainMenu = styled.div`
    margin-top: 48px;

    & > a + a {
        margin-top: 16px;
    }
`

const MenuLink = styled.a`
    display: block;
    font-size: 20.8px;
    cursor: pointer;

    @media screen and (max-width: 900px) {
        font-size: 18px;

    }
`

function TopMenu() {
    return (
        <MainMenu style={{ marginTop: '48px' }}>
            <Link href="/">
                <MenuLink>홈</MenuLink>
            </Link>
            <Link href="/movieSearch">
                <MenuLink>영화</MenuLink>
            </Link>
            <Link href="/movieTalk">
                <MenuLink>무비톡</MenuLink>
            </Link>
        </MainMenu>
    )
};

export default TopMenu;
