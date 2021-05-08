import React from 'react';
import styled from 'styled-components'

import { AiOutlineUser } from "react-icons/ai";

const UserProfile = styled.div`
    margin-top: 32px;

    & > svg {
        font-size: 24px;
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
`

function Profile({ me }) {
    if(me && me.name) {
        return (
            <UserProfile>
                <UserImage src={me.image} />
                <div>{me.name}</div>
            </UserProfile>
        )
    } else {
        return (
            <UserProfile>
                <AiOutlineUser />
                <div>Guest</div>
            </UserProfile>
        )
    }
};

export default Profile;
