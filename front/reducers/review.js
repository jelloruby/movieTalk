export const initialState = {
    addReviewDone: false,
    addReviewError: false,
    modifyReviewDone: false,
    modifyReviewError: false,
    loadReviewDone: false,
    loadReviewError: null,
    loadMyReviewsDone: false,
    loadMyReviewsError: null,
    loadMoreMyReviewsDone: false,
    loadMoreMyReviewsError: null,
    loadAllReviewsLoading: false,
    loadAllReviewsDone: false,
    loadAllReviewsError: null,
    likeReviewDone: false,
    likeReviewError: null,
    unlikeReviewDone: false,
    unlikeReviewError: null,
    myReviews: [],
    allReviews: [],
    review: [],
};

export const ADD_REVIEW_REQUEST = 'ADD_REVIEW_REQUEST';
export const ADD_REVIEW_SUCCESS = 'ADD_REVIEW_SUCCESS';
export const ADD_REVIEW_FAILURE = 'ADD_REVIEW_FAILURE';
export const MODIFY_REVIEW_REQUEST = 'MODIFY_REVIEW_REQUEST';
export const MODIFY_REVIEW_SUCCESS = 'MODIFY_REVIEW_SUCCESS';
export const MODIFY_REVIEW_FAILURE = 'MODIFY_REVIEW_FAILURE';
export const LOAD_REVIEW_REQUEST = 'LOAD_REVIEW_REQUEST';
export const LOAD_REVIEW_SUCCESS = 'LOAD_REVIEW_SUCCESS';
export const LOAD_REVIEW_FAILURE = 'LOAD_REVIEW_FAILURE';
export const LOAD_MY_REVIEWS_REQUEST = 'LOAD_MY_REVIEWS_REQUEST';
export const LOAD_MY_REVIEWS_SUCCESS = 'LOAD_MY_REVIEWS_SUCCESS';
export const LOAD_MY_REVIEWS_FAILURE = 'LOAD_MY_REVIEWS_FAILURE';
export const LOAD_MORE_MY_REVIEWS_REQUEST = 'LOAD_MORE_MY_REVIEWS_REQUEST';
export const LOAD_MORE_MY_REVIEWS_SUCCESS = 'LOAD_MORE_MY_REVIEWS_SUCCESS';
export const LOAD_MORE_MY_REVIEWS_FAILURE = 'LOAD_MORE_MY_REVIEWS_FAILURE';
export const LOAD_ALL_REVIEWS_REQUEST = 'LOAD_ALL_REVIEWS_REQUEST';
export const LOAD_ALL_REVIEWS_SUCCESS = 'LOAD_ALL_REVIEWS_SUCCESS';
export const LOAD_ALL_REVIEWS_FAILURE = 'LOAD_ALL_REVIEWS_FAILURE';
export const LIKE_REVIEW_REQUEST = 'LIKE_REVIEW_REQUEST';
export const LIKE_REVIEW_SUCCESS = 'LIKE_REVIEW_SUCCESS';
export const LIKE_REVIEW_FAILURE = 'LIKE_REVIEW_FAILURE';
export const UNLIKE_REVIEW_REQUEST = 'UNLIKE_REVIEW_REQUEST';
export const UNLIKE_REVIEW_SUCCESS = 'UNLIKE_REVIEW_SUCCESS';
export const UNLIKE_REVIEW_FAILURE = 'UNLIKE_REVIEW_FAILURE';



const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_REVIEW_REQUEST:
            console.log('reducer Review');
            return state = {
                ...state,
                addReviewDone: false,
            }
        case ADD_REVIEW_SUCCESS:
            console.log('reducer ADD_REVIEW_SUCCESS');
            return state = {
                ...state,
                addReviewDone: true,
            }
        case ADD_REVIEW_FAILURE:
            console.log('reducer ADD_REVIEW_FAILURE');
            return state = {
                ...state,
                addReviewDone: false,
            }
        case MODIFY_REVIEW_REQUEST:
            console.log('reducer MODIFY_REVIEW_REQUEST');
            return state = {
                ...state,
                modifyReviewDone: false,
            }
        case MODIFY_REVIEW_SUCCESS:
            console.log('reducer MODIFY_REVIEW_SUCCESS');
            return state = {
                ...state,
                modifyReviewDone: true,
            }
        case MODIFY_REVIEW_FAILURE:
            console.log('reducer MODIFY_REVIEW_FAILURE');
            return state = {
                ...state,
                modifyReviewDone: false,
            }
        case LOAD_REVIEW_REQUEST:
            console.log('reducer Review');
            return state = {
                ...state,
                loadReviewDone: false,
            }
        case LOAD_REVIEW_SUCCESS:
            console.log('reducer LOAD_REVIEW_SUCCESS');
            console.log(action.data);
            return state = {
                ...state,
                loadReviewDone: true,
                review: action.data[0],
            }
        case LOAD_REVIEW_FAILURE:
            console.log('reducer LOAD_REVIEW_FAILURE');
            return state = {
                ...state,
                loadReviewError: true,
            } 
        case LOAD_MY_REVIEWS_REQUEST:
            console.log('reducer Review');
            return state = {
                ...state,
                loadMyReviewsDone: false,
            }
        case LOAD_MY_REVIEWS_SUCCESS:
            console.log('reducer LOAD_MY_REVIEWS_SUCCESS');
            return state = {
                ...state,
                loadMyReviewsDone: true,
                myReviews: action.data,
            }
        case LOAD_MY_REVIEWS_FAILURE:
            console.log('reducer LOAD_MY_REVIEWS_FAILURE');
            return state = {
                ...state,
                loadMyReviewsDone: false,
            }
        case LOAD_MORE_MY_REVIEWS_REQUEST:
            console.log('reducer Review');
            return state = {
                ...state,
                loadMoreMyReviewsDone: false,
            }
        case LOAD_MORE_MY_REVIEWS_SUCCESS:
            console.log('reducer LOAD_MORE_MY_REVIEWS_SUCCESS');
            return state = {
                ...state,
                loadMoreMyReviewsDone: true,
                myReviews: [ ...state.myReviews, ...action.data ],
            }
        case LOAD_MORE_MY_REVIEWS_FAILURE:
            console.log('reducer LOAD_MORE_MY_REVIEWS_FAILURE');
            return state = {
                ...state,
                loadMoreMyReviewsDone: false,
            }
        case LOAD_ALL_REVIEWS_REQUEST:
            console.log('reducer Review');
            return state = {
                ...state,
                loadAllReviewsLoading: true,
                loadAllReviewsDone: false,
            }
        case LOAD_ALL_REVIEWS_SUCCESS:
            console.log('reducer LOAD_ALL_REVIEWS_SUCCESS');
            return state = {
                ...state,
                loadAllReviewsLoading: false,
                loadAllReviewsDone: true,
                allReviews: [ ...state.allReviews, ...action.data ],
                // hasMoreReviews: action.data.length < 50,
            }
        case LOAD_ALL_REVIEWS_FAILURE:
            console.log('reducer LOAD_ALL_REVIEWS_FAILURE');
            return state = {
                ...state,
                loadAllReviewsLoading: false,
                loadAllReviewsDone: false,
            }
        case LIKE_REVIEW_REQUEST:
            console.log('reducer Review');
            return state = {
                ...state,
                likeReviewDone: false,
            }
        case LIKE_REVIEW_SUCCESS:
            console.log('reducer LIKE_REVIEW_SUCCESS');
            const likeResult = state.allReviews.find((v) => v._id === action.data.reviewId);
            likeResult.likers.push(action.data.userId);
            return state = {
                ...state,
                likeReviewDone: true,
            }
        case LIKE_REVIEW_FAILURE:
            console.log('reducer LIKE_REVIEW_FAILURE');
            return state = {
                ...state,
                likeReviewDone: false,
            }  
        case UNLIKE_REVIEW_REQUEST:
            console.log('reducer Review');
            return state = {
                ...state,
                unlikeReviewDone: false,
            }
        case UNLIKE_REVIEW_SUCCESS:
            console.log('reducer UNLIKE_REVIEW_SUCCESS');
            const review = state.allReviews.find((v) => v._id === action.data.reviewId);
            review.likers = review.likers.filter((v) => v._id === action.data.userId);
            return state = {
                ...state,
                unlikeReviewDone: true,
            }
        case UNLIKE_REVIEW_FAILURE:
            console.log('reducer UNLIKE_REVIEW_FAILURE');
            return state = {
                ...state,
                unlikeReviewDone: false,
            }  
 

        default:
            return state;
    }
};

export default reducer;