import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginRequestAction } from '../reducers/user';
import styled from 'styled-components';

const Input = styled.input`
    width: 300px;
    border-radius: 5px;
    padding: 15px 20px;
    background: black;
    border: 1px solid gray;
    box-sizing: border-box;
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
        <form onSubmit={onSubmitHandler} style={{ marginTop: '1rem' }} className="login-form" >
            <div>
                <label style={{ display: 'block', fontSize: '1.2rem' }}>이메일</label>
                <Input
                    type="email"
                    name="email"
                    value={Email}
                    placeholder="mail@website.com"
                    onChange={onEmailHandler}
                />
            </div>
            <div>
                <label style={{ display: 'block', fontSize: '1.2rem' }}>비밀번호</label>
                <Input
                    type="password"
                    name="password"
                    value={Password}
                    placeholder="password"
                    onChange={onPasswordHandler}
                />
            </div>
            <button type="submit" className="btn login-btn">
                로그인
            </button>
        </form>
    )
};

export default LoginForm;
