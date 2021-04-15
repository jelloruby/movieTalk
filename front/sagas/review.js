import axios from 'axios';
import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import {
    ADD_REVIEW_REQUEST,
    ADD_REVIEW_SUCCESS,
    ADD_REVIEW_FAILURE,
    LOAD_ALL_REVIEW_REQUEST,
    LOAD_ALL_REVIEW_SUCCESS,
    LOAD_ALL_REVIEW_FAILURE
} from '../reducers/review';

// api
function addReviewAPI(data) {
    return axios.post('/review', data)
}

function loadAllReviewAPI() {
    return axios.get('/review/all')
}


// action - reducers
function* addReview(action) {
    try {
        const result =  yield call(addReviewAPI, action.data)
        console.log('saga ADD_REVIEW');  
        yield put({
            type: ADD_REVIEW_SUCCESS,
            data: result.data
        })
    } catch(err) {
        yield put({
            type: ADD_REVIEW_FAILURE,
            data: err.response.data
        })
    }
}

function* loadAllReview() {
    try {
        const result =  yield call(loadAllReviewAPI)
        console.log('saga LOAD_ALL_REVIEW');  
        yield put({
            type: LOAD_ALL_REVIEW_SUCCESS,
            data: result.data 
        })
    } catch(err) {
        yield put({
            type: LOAD_ALL_REVIEW_FAILURE,
            data: err.response.data
        })
    }
}


// start function
function* watchReview() {
    yield takeLatest(ADD_REVIEW_REQUEST, addReview);
}

function* watchLoadAllReview() {
    yield takeLatest(LOAD_ALL_REVIEW_REQUEST, loadAllReview);
}

export default function* reviewSaga() {
    yield all([
      fork(watchReview),
      fork(watchLoadAllReview),

    ]);
}