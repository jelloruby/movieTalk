export const initialState = {
    addReviewDone: false,
    addReviewError: null,
    loadAllReviewDone: false,
    loadAllReviewError: null,
    reviews: [],
};

export const ADD_REVIEW_REQUEST = 'ADD_REVIEW_REQUEST';
export const ADD_REVIEW_SUCCESS = 'ADD_REVIEW_SUCCESS';
export const ADD_REVIEW_FAILURE = 'ADD_REVIEW_FAILURE';
export const LOAD_ALL_REVIEW_REQUEST = 'LOAD_ALL_REVIEW_REQUEST';
export const LOAD_ALL_REVIEW_SUCCESS = 'LOAD_ALL_REVIEW_SUCCESS';
export const LOAD_ALL_REVIEW_FAILURE = 'LOAD_ALL_REVIEW_FAILURE';

export const addReviewRequestAction = (data) => ({
    type: ADD_REVIEW_REQUEST,
    data,
});


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
                // reviews: [ ...state.reviews, action.data.comment ]
            }
        case ADD_REVIEW_FAILURE:
            console.log('reducer ADD_REVIEW_FAILURE');
            return state = {
                ...state,
                addReviewDone: false,
            }

        case LOAD_ALL_REVIEW_REQUEST:
            console.log('reducer Review');
            return state = {
                ...state,
                loadAllReviewDone: false,
            }
        case LOAD_ALL_REVIEW_SUCCESS:
            console.log('reducer LOAD_ALL_REVIEW_SUCCESS');
            return state = {
                ...state,
                loadAllReviewDone: true,
                // reviews: [ ...state.reviews, action.data.comment ]
            }
        case LOAD_ALL_REVIEW_FAILURE:
            console.log('reducer LOAD_ALL_REVIEW_FAILURE');
            return state = {
                ...state,
                loadAllReviewDone: false,
            }

        default:
            return state;
    }
};

export default reducer;