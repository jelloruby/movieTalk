import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;

`

const InnerLink = styled.a`
    color: white;
    display: inline-block;
    font-size: 1.5rem;
    cursor: pointer;
`

function Nav() {
    return (
        <NavBar>
            <div className="left-menu">
                <InnerLink>로고</InnerLink>
                <Link href="/">
                    <InnerLink>Home</InnerLink>
                </Link>
                <Link href="/movieSearch">
                    <InnerLink>영화검색</InnerLink>
                </Link>
                <Link href="/movieTalk">
                    <InnerLink>무비톡</InnerLink>
                </Link>
            </div>
            <div className="right-menu">
                <Link href="/login">
                    <InnerLink>로그인</InnerLink>
                </Link>
                <Link href="/signup">
                    <InnerLink>회원가입</InnerLink>
                </Link>
            </div>
        </NavBar>
    )
}

export default Nav
