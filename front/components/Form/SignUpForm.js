import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import SignupBotton from '../Botton/LoginBotton';

import { SIGN_UP_REQUEST } from '../../reducers/user'

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

function SignUpForm() {
    const dispatch = useDispatch();
    
    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [PasswordError, setPasswordError] = useState(false);
  
    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    };
  
    const onNameHandler = (e) => {
        setName(e.currentTarget.value);
    };
  
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value);
    };
  
    const onConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.currentTarget.value);
    };
  
    const onSubmitHandler = (e) => {  
        e.preventDefault();

        if(Password !== ConfirmPassword) {
            return setPasswordError(true);
        }

        let body = {
            email: Email,
            name: Name,
            password: Password,
        }

        dispatch({
            type: SIGN_UP_REQUEST,
            data: body
        });
    };

    return (
        <form onSubmit={onSubmitHandler}>
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
                <Label>이름</Label>
                <Input
                    type="name"
                    name="name"
                    value={Name}
                    placeholder="name"
                    onChange={onNameHandler}
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
            <div>
                <Label>비밀번호확인</Label>
                <Input
                    type="password"
                    name="password"
                    value={ConfirmPassword}
                    placeholder="confirm password"
                    onChange={onConfirmPasswordHandler}
                />
            </div>
            <SignupBotton bottonName="회원가입" />
        </form>
    )
}

export default SignUpForm;
