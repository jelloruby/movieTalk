import React from 'react'
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';

import { LOG_OUT_REQUEST } from '../../../reducers/user';

const UserMenu = styled.div`
    position: absolute;
    bottom: 64px;

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

function BottomMenu({ me }) {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch({
            type: LOG_OUT_REQUEST,
        })
        Router.push('/login')
    };

    if(me && me.name) {
        return (
            <UserMenu>
                <Link href={`/myPage/${me._id}`}>
                    <MenuLink>마이페이지</MenuLink>
                </Link>
                <MenuLink onClick={handleLogout}>로그아웃</MenuLink>
            </UserMenu>
        )
    } else {
        return (
            <UserMenu>
                <Link href="/login">
                    <MenuLink>로그인</MenuLink>
                </Link>
                <Link href="/signup">
                    <MenuLink>회원가입</MenuLink>
                </Link>
            </UserMenu>
        )
    }
}

export default BottomMenu;
