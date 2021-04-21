import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link'
import styled from 'styled-components'

import { AiOutlineUser } from "react-icons/ai";
import { LOG_OUT_REQUEST } from '../reducers/user';

const NavBar = styled.div`
    width: 200px;
    height: 100vh;
    padding: 3rem 2rem;
    box-sizing: border-box;
    background: black;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 99999;
`
const MainMenu = styled.div`
    margin-top: 3rem;

    & > a + a {
        margin-top: 1rem;
    }
`

const UserMenu = styled.div`
    position: absolute;
    bottom: 6rem;

    & > a + a {
        margin-top: 1rem;
    }
`

const UserProfile = styled.div`
    margin-top: 2rem;

    & > svg {
        font-size: 1.5rem;
        display: inline-block;
        vertical-align: middle;
    }

    & > div {
        display: inline-block;
        position: relative;
        top: 1px;
        left: 10px;
    }
`

const UserImage = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    vertical-align: middle;

    & > div {

    }
`

const HomeLink = styled.a`
    color: red;
    display: block;
    font-size: 1.6rem;
    cursor: pointer;
`

const MenuLink = styled.a`
    display: block;
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
                <div className="top-menu">
                    <Link href="/">
                        <HomeLink>MovieTalk</HomeLink>
                    </Link>
                    <UserProfile>
                        <UserImage src={me.image} />
                        <div>{me.name}</div>
                    </UserProfile>
                </div>
                <MainMenu style={{ marginTop: '3rem' }}>
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
                <UserMenu>
                    <Link href="/myPage">
                        <MenuLink>마이페이지</MenuLink>
                    </Link>
                    <MenuLink onClick={handleLogout}>로그아웃</MenuLink>
                </UserMenu>
                <div style={{ position: 'absolute', bottom: '3rem', }}>
                    화이트모드
                </div>
            </NavBar>
        )
    } else {
        return (
            <NavBar>
                <div className="top-menu">
                    <Link href="/">
                        <HomeLink>MovieTalk</HomeLink>
                    </Link>
                    <UserProfile>
                        <AiOutlineUser />
                        <div>Guest</div>
                    </UserProfile>
                </div>
                <MainMenu>
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
                <UserMenu>
                    <Link href="/login">
                        <MenuLink>로그인</MenuLink>
                    </Link>
                    <Link href="/signup">
                        <MenuLink>회원가입</MenuLink>
                    </Link>
                </UserMenu>
                <div style={{ position: 'absolute', bottom: '3rem' }}>
                    화이트모드
                </div>
            </NavBar>
        ) 
    }
};

export default Nav;
