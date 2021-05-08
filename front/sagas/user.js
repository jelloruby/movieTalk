import axios from 'axios';
import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import {
    LOG_IN_REQUEST,
    LOG_IN_FAILURE,
    LOG_IN_SUCCESS,
    SIGN_UP_REQUEST,
    SIGN_UP_FAILURE,
    SIGN_UP_SUCCESS,
    LOG_OUT_REQUEST,
    LOG_OUT_FAILURE,
    LOG_OUT_SUCCESS,
    LOAD_MY_INFO_REQUEST,
    LOAD_MY_INFO_FAILURE,
    LOAD_MY_INFO_SUCCESS,
} from '../reducers/user';



function loginAPI(data){
    return axios.post('/user/login', data)
}

function* logIn(action) {
    try {
        const result =  yield call(loginAPI, action.data)
        console.log(result);
        console.log('saga LOGIN');

        yield put({
            type: LOG_IN_SUCCESS,
            data: result.data
        })
    } catch(err) {
        yield put({
            type: LOG_IN_FAILURE,
            data: err.response.data
        })
    }
}

function signUpAPI(data){
    return axios.post('/user/signup', data)
}

function* signUp(action) {
    try {
        const result =  yield call(signUpAPI, action.data)
        console.log('saga SIGN-UP'); 
        console.log(result);
        yield put({
            type: SIGN_UP_SUCCESS,
        })
    } catch(err) {
        yield put({
            type: SIGN_UP_FAILURE,
            data: err.response.data
        })
    }
}

function logoutAPI(){
    return axios.post('/user/logout', data)
}

function* logOut() {
    try {
        yield call(logoutAPI)
        console.log('saga LOGOUT');

        yield put({
            type: LOG_OUT_SUCCESS,
        })
    } catch(err) {
        yield put({
            type: LOG_OUT_FAILURE,
            data: err.response.data
        })
    }
}

function loadMyInfoAPI() {
    return axios.get('/user')
}

function* loadMyInfo() {
    try {
        const result =  yield call(loadMyInfoAPI)
        console.log('saga LOAD_MY_INFO'); 
        yield put({
            type: LOAD_MY_INFO_SUCCESS,
            data: result.data
        })
    } catch(err) {
        yield put({
            type: LOAD_MY_INFO_FAILURE,
            data: err.response.data
        })
    }
}



function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn)
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp)
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut)
}

function* watchLoadMyInfo() {
    yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo)
}

export default function* userSaga() {
    yield all([
      fork(watchLogIn),
      fork(watchSignUp),
      fork(watchLogOut),
      fork(watchLoadMyInfo),
    ]);
}