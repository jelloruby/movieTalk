import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';

import UserLayout from '../components/layout/UserLayout';
import SignUpForm from '../components/SignUpForm';

function signup() {
    const { signUpDone, signUpError } = useSelector((state) => state.user);

    useEffect(() => {
        if(signUpDone) {
            Router.push('/login');
            console.log("회원가입 완료");
        }
    }, [signUpDone]);

    useEffect(() => {
        if(signUpError) {
            alert(signUpError);
        }
    }, [signUpError]);

    return (
        <UserLayout>
            <SignUpForm />
        </UserLayout>
    )
}

export default signup
