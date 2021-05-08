import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Logo from './Sections/Logo';
import Profile from './Sections/Profile';
import TopMenu from './Sections/TopMenu';
import BottomMenu from './Sections/BottomMenu';
import HambergerBtn from './Sections/HambergerBtn';

const NavBar = styled.div`
    width: 200px;
    height: 100vh;
    padding: 48px 32px;
    box-sizing: border-box;
    background: black;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 99999;
    transition: 1s;

    @media screen and (max-width: 900px) {
        width: 150px;
        padding: 80px 21px;
        left: ${ props => props.isOpened ? '0px' : '-200px' };
    }
`

const NavBtn = styled.div`
    width: 30px;
    height: 30px;
    position: fixed;
    top: 21px;
    left: 21px;
    display: none;

    div {
        width: 20px;
        height: 2px;
        background-color: white;
        border-radius: 1px;
        transition: all 0.3s linear;
        position: relative;

        &:nth-child(1) {
            transform: ${props => props.isOpened ? 'rotate(45deg)' : 'rotate(0)'};
            position: absolute;
            top: ${props => props.isOpened ? '5px' : 'auto'};
        }
        &:nth-child(2) {
            transform: ${props => props.isOpened ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${props => props.isOpened ? 0 : 1};
        }
        &:nth-child(3) {
            transform: ${props => props.isOpened ? 'rotate(-45deg)' : 'rotate(0)'};
            position: absolute;
            top: ${props => props.isOpened ? '-3px' : 'auto'};
        }

    }

    & > div + div {
        margin-top: 8px;
    }

    @media screen and (max-width: 900px) {
        display: block;
    }
`

function Nav() {
    const { me } = useSelector((state) => state.user);

    const [isOpened, setIsOpened] = useState(false);

    const closeMenu = () => {
        console.log("close");
        setIsOpened(false);
    };

    const openMenu = () => {
        console.log("open");
        setIsOpened(true);
    };

    if(me && me.name) {
        return (
            <NavBar isOpened={isOpened}>
                <NavBtn isOpened={isOpened} onClick={isOpened ? closeMenu : openMenu} >
                    <div></div>
                    <div></div>
                    <div></div>
                </NavBtn>
                <div>
                    <Logo />
                    <Profile me={me} />
                </div>
                <TopMenu />
                <BottomMenu me={me} />
            </NavBar>
        )
    } else {
        return (
            <NavBar isOpened={isOpened}>
                <NavBtn isOpened={isOpened} onClick={isOpened ? closeMenu : openMenu} >
                    <div></div>
                    <div></div>
                    <div></div>
                </NavBtn>
                <div>
                    <Logo />
                    <Profile me={me} />
                </div>
                <TopMenu />
                <BottomMenu me={me} />
            </NavBar>
        ) 
    }
};

export default Nav;
