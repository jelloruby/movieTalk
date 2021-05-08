import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const HomeLink = styled.a`
    color: red;
    display: block;
    font-size: 25.6px;
    cursor: pointer;

    @media screen and (max-width: 900px) {
        font-size: 20px;
    }
`

function Logo() {
    return (
        <Link href="/">
            <HomeLink>MovieTalk</HomeLink>
        </Link>
    )
}

export default Logo
