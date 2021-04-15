import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link'
import styled from 'styled-components'
import { LOG_OUT_REQUEST } from '../reducers/user';

const NavBar = styled.div`
    height: 3rem;
    padding: 1rem 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const MenuLink = styled.a`
    display: inline-block;
    font-size: 1.4rem;
    cursor: pointer;
    margin-left: 1rem;
`

const HomeLink = styled.a`
    color: red;
    display: inline-block;
    font-size: 1.3rem;
    cursor: pointer;
`

function Nav() {
    const dispatch = useDispatch();
    const { me } = useSelector((state) => state.user);

    const handleLogout = () => {
        dispatch({
            type: LOG_OUT_REQUEST,
        })
    }

    if(me) {
        return (
            <NavBar>
                <div className="left-menu">
                    <Link href="/">
                        <HomeLink>MovieTalk</HomeLink>
                    </Link>
                    <Link href="/movieSearch">
                        <MenuLink>영화</MenuLink>
                    </Link>
                    <Link href="/movieTalk">
                        <MenuLink>무비톡</MenuLink>
                    </Link>
                </div>
                <div className="right-menu">
                    <Link href="/myPage">
                        <MenuLink>마이페이지</MenuLink>
                    </Link>
                    <MenuLink onClick={handleLogout}>로그아웃</MenuLink>
                </div>
            </NavBar>
        )
    } else {
        return (
            <NavBar>
                <div className="left-menu">
                    <Link href="/">
                        <HomeLink>MovieTalk</HomeLink>
                    </Link>
                    <Link href="/movieSearch">
                        <MenuLink>영화</MenuLink>
                    </Link>
                    <Link href="/movieTalk">
                        <MenuLink>무비톡</MenuLink>
                    </Link>
                </div>
                <div className="right-menu">
                    <Link href="/login">
                        <MenuLink>로그인</MenuLink>
                    </Link>
                    <Link href="/signup">
                        <MenuLink>회원가입</MenuLink>
                    </Link>
                </div>
            </NavBar>
        ) 
    }

}

export default Nav
