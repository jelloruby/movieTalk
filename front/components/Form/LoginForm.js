import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginRequestAction } from '../../reducers/user';
import styled from 'styled-components';

import LoginBotton from '../Botton/LoginBotton';

const Input = styled.input`
    width: 300px;
    border-radius: 5px;
    padding: 15px 20px;
    background: black;
    border: 1px solid gray;
    box-sizing: border-box;
`

const Label = styled.label`
    display: block;
    font-size: 19px;
    margin-bottom: 5px;
`

function LoginForm() {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    };

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    };

    const onSubmitHandler = (e) => { 
        e.preventDefault();

        let body = {
            email: Email,
            password: Password
        };
        dispatch(loginRequestAction(body));
    };

    return (
        <form onSubmit={onSubmitHandler} style={{ marginTop: '16px' }} className="login-form" >
            <div>
                <Label>이메일</Label>
                <Input
                    type="email"
                    name="email"
                    value={Email}
                    placeholder="mail@website.com"
                    onChange={onEmailHandler}
                />
            </div>
            <div>
                <Label>비밀번호</Label>
                <Input
                    type="password"
                    name="password"
                    value={Password}
                    placeholder="password"
                    onChange={onPasswordHandler}
                />
            </div>
            <LoginBotton bottonName="로그인" />
        </form>
    )
};

export default LoginForm;
