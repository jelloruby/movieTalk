import axios from 'axios';
import { all, fork, call, put, takeLatest, throttle } from 'redux-saga/effects';
import {
    ADD_REVIEW_REQUEST,
    ADD_REVIEW_SUCCESS,
    ADD_REVIEW_FAILURE,
    MODIFY_REVIEW_REQUEST,
    MODIFY_REVIEW_SUCCESS,
    MODIFY_REVIEW_FAILURE,
    LOAD_REVIEW_REQUEST,
    LOAD_REVIEW_SUCCESS,
    LOAD_REVIEW_FAILURE,
    LOAD_MY_REVIEWS_REQUEST,
    LOAD_MY_REVIEWS_SUCCESS,
    LOAD_MY_REVIEWS_FAILURE,
    LOAD_MORE_MY_REVIEWS_REQUEST,
    LOAD_MORE_MY_REVIEWS_SUCCESS,
    LOAD_MORE_MY_REVIEWS_FAILURE,
    LOAD_ALL_REVIEWS_REQUEST,
    LOAD_ALL_REVIEWS_SUCCESS,
    LOAD_ALL_REVIEWS_FAILURE,
    LIKE_REVIEW_REQUEST,
    LIKE_REVIEW_SUCCESS,
    LIKE_REVIEW_FAILURE,
    UNLIKE_REVIEW_REQUEST,
    UNLIKE_REVIEW_SUCCESS,
    UNLIKE_REVIEW_FAILURE,
    
} from '../reducers/review';




function addReviewAPI(data) {
    return axios.post('/review', data)
}

function* addReview(action) {
    try {
        yield call(addReviewAPI, action.data)
        console.log('saga ADD_REVIEW');  
        yield put({
            type: ADD_REVIEW_SUCCESS,
        })
    } catch(err) {
        yield put({
            type: ADD_REVIEW_FAILURE,
            data: err.response.data
        })
    }
}

function modifyReviewAPI(data) {
    return axios.post('/review/edit', data)
}

function* modifyReview(action) {
    try {
        yield call(modifyReviewAPI, action.data)
        console.log('saga MODIFY_REVIEW');  
        yield put({
            type: MODIFY_REVIEW_SUCCESS,
        })
    } catch(err) {
        yield put({
            type: MODIFY_REVIEW_FAILURE,
            data: err.response.data
        })
    }
}

function loadReviewAPI(data) {
    return axios.get(`/review/${data.writerId}/${data.movieId}`)
}

function* loadReview(action) {
    try {
        const result = yield call(loadReviewAPI, action.data)
        console.log('saga LOAD_REVIEW');
        yield put({
            type: LOAD_REVIEW_SUCCESS,
            data: result.data
        })
    } catch(err) {
        yield put({
            type: LOAD_REVIEW_FAILURE,
            data: err.response.data
        })
    }
}

function loadMyReviewsAPI(data) {
    return axios.get(`/review/${data}`)
}

function* loadMyReviews(action) {
    try {
        const result = yield call(loadMyReviewsAPI, action.data)
        console.log('saga LOAD_MY_REVIEWS');
        yield put({
            type: LOAD_MY_REVIEWS_SUCCESS,
            data: result.data
        })
    } catch(err) {
        yield put({
            type: LOAD_MY_REVIEWS_FAILURE,
            data: err.response.data
        })
    }
}

function loadMoreMyReviewsAPI(data) {
    return axios.post(`/review/${data.userId}`, data)
}

function* loadMoreMyReviews(action) {
    try {
        const result = yield call(loadMoreMyReviewsAPI, action.data)
        console.log('saga LOAD_MY_REVIEWS');
        yield put({
            type: LOAD_MORE_MY_REVIEWS_SUCCESS,
            data: result.data
        })
    } catch(err) {
        yield put({
            type: LOAD_MORE_MY_REVIEWS_FAILURE,
            data: err.response.data
        })
    }
}

function loadAllReviewsAPI(data) {
    return axios.post('/reviews', data)
}

function* loadAllReviews(action) {
    try {
        const result = yield call(loadAllReviewsAPI, action.data)
        console.log('saga LOAD_ALL_REVIEWS');
        yield put({
            type: LOAD_ALL_REVIEWS_SUCCESS,
            data: result.data
        })
    } catch(err) {
        yield put({
            type: LOAD_ALL_REVIEWS_FAILURE,
            data: err.response.data
        })
    }
}

function likeReviewAPI(data) {
    return axios.post(`/review/like`, data)
}

function* likeReview(action) {
    try {
        const result =  yield call(likeReviewAPI, action.data)
        console.log('saga LIKE_REVIEW');
        yield put({
            type: LIKE_REVIEW_SUCCESS,
            data: result.data
        })
    } catch(err) {
        yield put({
            type: LIKE_REVIEW_FAILURE,
            data: err.response.data
        })
    }
}

function unLikeReviewAPI(data) {
    return axios.post(`/review/dislike`, data)
}

function* unLikeReview(action) {
    try {
        const result = yield call(unLikeReviewAPI, action.data)
        console.log('saga UNLIKE_REVIEW');
        yield put({
            type: UNLIKE_REVIEW_SUCCESS,
            data: result.data
        })
    } catch(err) {
        yield put({
            type: UNLIKE_REVIEW_FAILURE,
            data: err.response.data
        })
    }
}



function* watchAddReview() {
    yield takeLatest(ADD_REVIEW_REQUEST, addReview);
}

function* watchModifyReview() {
    yield takeLatest(MODIFY_REVIEW_REQUEST, modifyReview);
}

function* watchLoadReview() {
    yield takeLatest(LOAD_REVIEW_REQUEST, loadReview);
}

function* watchMyReviews() {
    yield takeLatest(LOAD_MY_REVIEWS_REQUEST, loadMyReviews);
}

function* watchLoadMyReviews() {
    yield takeLatest(LOAD_MORE_MY_REVIEWS_REQUEST, loadMoreMyReviews);
}

function* watchAllReviews() {
    yield throttle(2000, LOAD_ALL_REVIEWS_REQUEST, loadAllReviews);
}

function* watchLikeReview() {
    yield takeLatest(LIKE_REVIEW_REQUEST, likeReview);
}

function* watchUnLikeReview() {
    yield takeLatest(UNLIKE_REVIEW_REQUEST, unLikeReview);
}



export default function* reviewSaga() {
    yield all([
      fork(watchAddReview),
      fork(watchModifyReview),
      fork(watchLoadReview),
      fork(watchMyReviews),
      fork(watchLoadMyReviews),
      fork(watchAllReviews),
      fork(watchLikeReview),
      fork(watchUnLikeReview),
      
    ]);
}