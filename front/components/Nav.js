import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const NavBar = styled.div`
    background: orange
`

function Nav() {
    return (
        <NavBar>
            <div className="left-menu">
                <Link href="/">Home</Link>
                <Link href="/movieSearch">영화검색</Link>
                <Link href="/movieTalk">무비톡</Link>
            </div>
            <div className="right-menu">
                <Link href="/login">로그인</Link>
                <Link href="/signup">회원가입</Link>
            </div>
        </NavBar>
    )
}

export default Nav
